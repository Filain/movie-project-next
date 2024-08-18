import {homeService} from "@/services/homeService";

import {HomePageComponent} from "@/components/HomePageComponent/HomePageComponent";

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
        <HomePageComponent nowPlayingMovies={nowPlayingMovies} popularMovies={popularMovies} topRatedMovies={topRatedMovies} upcomingMovies={upcomingMovies}/>

    );
}
