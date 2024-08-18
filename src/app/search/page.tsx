'use client'

import MoviesComponent from "@/components/Movies/MoviesComponent";
import {useEffect, useState} from "react";
import {IMovie} from "@/interfases/movieInterface";
import {useSearchParams} from "next/navigation";
import {searchService} from "@/services/searchService";

export default function Movie() {
    const [movies, setMovies] = useState<IMovie[]>()
    const searchParams = useSearchParams()

    const page = searchParams.get('page') || '1'

    const query = searchParams.get('query') || ''

    useEffect(() => {
        searchService.getBySearch(query, page).then(data => setMovies(data.results))
    }, [page, query]);


    return (
        <div>
            <MoviesComponent movies={movies}/>
        </div>
    );
}

