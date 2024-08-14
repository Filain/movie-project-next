'use client'
import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IMovie} from "@/interfases/movieInterfase";
import {useSearchParams} from "next/navigation";
import {genreService} from "@/services/genreService";
import MoviesComponent from "@/components/Movies/MoviesComponent";

interface IProps extends PropsWithChildren {

}

const GenreMovieComponent: FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>()
    const searchParams = useSearchParams()

    const page = searchParams.get('page') || '1'
    const with_genres = searchParams.get('genreId') || '28'

    useEffect(() => {
        genreService.getMoviesByGenre(page, with_genres).then(data => setMovies(data.results))

        // movieService.getAll(page).then(data => setMovies(data.results))
    }, [page, with_genres]);

    return (
        <div>
            <MoviesComponent movies={movies}/>
        </div>
    );
};

export {GenreMovieComponent};
