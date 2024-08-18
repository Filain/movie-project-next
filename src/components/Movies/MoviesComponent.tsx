'use client'

import {IMovie} from "@/interfases/movieInterface";
import {FC} from "react";
import {MovieComponent} from "@/components/Movies/MovieComponent/MovieComponent";
import {PaginationsComponent} from "@/components/PaginationsComponent/PaginationsComponent";

import styles from './MoviesComponent.module.css'
import {useAppSelector} from "@/redux/hook/reduxHooks";

interface IProps {
    movies?: [] | IMovie[],
}

const MoviesComponent: FC<IProps> = ({movies}) => {
// Отримуємо поточну тему з Redux Store
    const theme = useAppSelector((state) => state.theme.theme);

    return (
        <div className={`${styles.wrap} ${theme}`}>
            <div className={styles.movies}>
                {movies && movies.map(movie => <MovieComponent key={movie.id} movie={movie}/>
                )}

            </div>
            <PaginationsComponent/>
        </div>
    )
}

export default MoviesComponent