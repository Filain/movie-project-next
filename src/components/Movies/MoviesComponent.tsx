'use client'

import {IMovie} from "@/interfases/movieInterface";
import {FC} from "react";
import {MovieComponent} from "@/components/Movies/MovieComponent/MovieComponent";
import {PaginationsComponent} from "@/components/PaginationsComponent/PaginationsComponent";

import styles from './MoviesComponent.module.css'
import {useTheme} from "@/theme/useTheme";

interface IProps {
    movies?: [] | IMovie[],
}

const MoviesComponent: FC<IProps> = ({movies}) => {
    const {theme} = useTheme();
    return (
        <div className={`${styles.wrap} ${theme}`}>
            <div className={movies !== undefined && movies.length <= 10 ? styles.noMovies : styles.movies}>
                {movies && movies.map(movie => <MovieComponent key={movie.id} movie={movie}/>
                )}

            </div>
            <PaginationsComponent/>
        </div>
    )
}

export default MoviesComponent