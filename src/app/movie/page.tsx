'use client'

import MoviesComponent from "@/components/Movies/MoviesComponent";
import {useEffect, useState} from "react";
import {IMovie} from "@/interfases/movieInterfase";
import {movieService} from "@/services/movieService";

export default function Movie() {
    const [movies, setMovies] = useState<IMovie[]>()

    useEffect(() => {
        movieService.getAll('1').then(data => setMovies(data.results))
    }, []);


    return (
        <div>
            <MoviesComponent movies={movies}/>
        </div>
    );
}

