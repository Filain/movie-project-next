'use client'

import {FC, PropsWithChildren} from "react";

import Link from "next/link";
import {MovieComponent} from "@/components/Movies/MovieComponent/MovieComponent";
import {IMovie} from "@/interfases/movieInterface";

import style from './HomePageComponent.module.css'
import {useAppSelector} from "@/redux/hook/reduxHooks";


interface IProps extends PropsWithChildren{
    nowPlayingMovies?:  [] | IMovie[],
    popularMovies?:  [] | IMovie[],
    topRatedMovies?:  [] | IMovie[],
    upcomingMovies?:  [] | IMovie[],

}

const HomePageComponent: FC<IProps> = ({nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies}) => {
    const theme = useAppSelector((state) => state.theme.theme);
    return (
     <div className={`${style.wrap} ${theme}`}>
         <Link href={'/now_playing'} className={style.tytle}>NowPlaying</Link>
         <div className={style.moviesLine}>
             {nowPlayingMovies?.map(movie =>
                 <MovieComponent key={movie.id} movie={movie}/>)}</div>
         <Link href={'/now_playing'} className={style.tytle}>Popular</Link>
         <div className={style.moviesLine}>
             {popularMovies?.map(movie =>
                 <MovieComponent key={movie.id} movie={movie}/>)}</div>
         <Link href={'/now_playing'} className={style.tytle}>Top Rated</Link>
         <div className={style.moviesLine}>

             {topRatedMovies?.map(movie =>
                 <MovieComponent key={movie.id} movie={movie}/>)}</div>
         <Link href={'/now_playing'} className={style.tytle}>Upcoming</Link>
         <div className={style.moviesLine}>
             {upcomingMovies?.map(movie =>
                 <MovieComponent key={movie.id} movie={movie}/>)}</div>
     </div>
 );
};

export {HomePageComponent};
