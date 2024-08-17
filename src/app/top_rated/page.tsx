'use client'

import MoviesComponent from "@/components/Movies/MoviesComponent";
import {useEffect, useState} from "react";
import {IMovie} from "@/interfases/movieInterface";
import {movieService} from "@/services/movieService";
import {useSearchParams} from "next/navigation";
import {homeService} from "@/services/homeService";

export default function Movie() {
    const [movies, setMovies] = useState<IMovie[]>()
    const searchParams = useSearchParams()

    const page = searchParams.get('page')||'1'

    useEffect(() => {
        homeService.getTopRated(page).then(data => setMovies(data.results))
    }, [page]);


    return (
        <div>
            <MoviesComponent movies={movies}/>
        </div>
    );
}

