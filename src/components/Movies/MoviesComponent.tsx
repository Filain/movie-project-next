import {IMovie} from "@/interfases/movieInterface";
import {FC} from "react";
import {MovieComponent} from "@/components/Movies/MovieComponent/MovieComponent";
import {PaginationsComponent} from "@/components/PaginationsComponent/PaginationsComponent";

import styles from './MoviesComponent.module.css'

interface IProps {
    movies?:  [] | IMovie[],
}

const MoviesComponent: FC<IProps> = ({movies}) => {

    return (
        <div className={styles.wrap}>
        <div className={styles.movies}>
            {movies && movies.map(movie => <MovieComponent key={movie.id} movie={movie}/>
            )}

        </div>
            <PaginationsComponent/>
        </div>
    )
}

export default MoviesComponent