import {homeService} from "@/services/homeService";
import {MovieComponent} from "@/components/Movies/MovieComponent/MovieComponent";

import style from './page.module.css'

export default async function Home() {
    const nowPlaying = await homeService.getNowPlaying()
    const popular = await homeService.getPopular()
    const topRated = await homeService.getTopRated()
    const upcoming = await homeService.getUpcoming()

    const countOfmovies = 5

    const nowPlayingMovies = nowPlaying.results.slice(0, countOfmovies)
    const popularMovies = popular.results.slice(0, countOfmovies)
    const topRatedMovies = topRated.results.slice(0, countOfmovies)
    const upcomingMovies = upcoming.results.slice(0, countOfmovies)


    return (
        <div className={style.wrap}>
            <div>
                <p>NowPlaying</p>

                <div className={style.moviesLine}>
                    {nowPlayingMovies.map(movie =>
                        <MovieComponent key={movie.id} movie={movie}/>)}</div>
            </div>
            <div>
                <p>Popular</p>

                <div className={style.moviesLine}>
                    {popularMovies.map(movie =>
                        <MovieComponent key={movie.id} movie={movie}/>)}</div>
            </div>
            <div>
                <p>Top Rated</p>

                <div className={style.moviesLine}>
                    {topRatedMovies.map(movie =>
                        <MovieComponent key={movie.id} movie={movie}/>)}</div>
            </div>
            <div>
                <p>Upcoming</p>

                <div className={style.moviesLine}>
                    {upcomingMovies.map(movie =>
                        <MovieComponent key={movie.id} movie={movie}/>)}</div>

            </div>


        </div>
    );
}
