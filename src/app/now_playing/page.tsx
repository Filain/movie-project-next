'use client'

import MoviesComponent from "@/components/Movies/MoviesComponent";
import {Suspense, useEffect, useState} from "react";
import {IMovie} from "@/interfases/movieInterface";
import {useSearchParams} from "next/navigation";
import {homeService} from "@/services/homeService";

export default function Movie() {
    const [movies, setMovies] = useState<IMovie[]>()
    const searchParams = useSearchParams()

    const page = searchParams.get('page') || '1'

    useEffect(() => {
        homeService.getNowPlaying(page).then(data => setMovies(data.results))
    }, [page]);


    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MoviesComponent movies={movies}/>
        </Suspense>
    );
}

