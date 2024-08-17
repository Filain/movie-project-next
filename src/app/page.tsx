import {homeService} from "@/services/homeService";
import {MovieComponent} from "@/components/Movies/MovieComponent/MovieComponent";

import style from './page.module.css'
import Link from "next/link";

export default async function Home() {


    const nowPlaying = await homeService.getNowPlaying('1')
    const popular = await homeService.getPopular('1')
    const topRated = await homeService.getTopRated('1')
    const upcoming = await homeService.getUpcoming('1')

    const countOfmovies = 5

    const nowPlayingMovies = nowPlaying.results.slice(0, countOfmovies)
    const popularMovies = popular.results.slice(0, countOfmovies)
    const topRatedMovies = topRated.results.slice(0, countOfmovies)
    const upcomingMovies = upcoming.results.slice(0, countOfmovies)


    return (
        <div className={style.wrap}>
            <div className={style.moviesLine}>
                <Link href={'/now_playing'} className={style.tytle} >NowPlaying</Link>
                {nowPlayingMovies.map(movie =>
                    <MovieComponent key={movie.id} movie={movie}/>)}</div>
                <div className={style.moviesLine}>
                    <Link href={'/now_playing'} className={style.tytle} >Popular</Link>
                    {popularMovies.map(movie =>
                        <MovieComponent key={movie.id} movie={movie}/>)}</div>
                <div className={style.moviesLine}>
                    <Link href={'/now_playing'} className={style.tytle} >Top Rated</Link>
                    {topRatedMovies.map(movie =>
                        <MovieComponent key={movie.id} movie={movie}/>)}</div>
                <div className={style.moviesLine}>
                    <Link href={'/now_playing'} className={style.tytle} >Upcoming</Link>
                    {upcomingMovies.map(movie =>
                        <MovieComponent key={movie.id} movie={movie}/>)}</div>
        </div>
    );
}
