'use client'

import MoviesComponent from "@/components/Movies/MoviesComponent";
import {useEffect, useState} from "react";
import {IMovie} from "@/interfases/movieInterface";
import {useSearchParams} from "next/navigation";
import {searchService} from "@/services/searchService";
import {useTheme} from "@/theme/useTheme";
import styles from './Search.module.css'

export default function Movie() {
    const [movies, setMovies] = useState<IMovie[]>()
    const searchParams = useSearchParams()
    const {theme} = useTheme();

    const page = searchParams.get('page') || '1'
    const query = searchParams.get('query') || ''

    useEffect(() => {
        searchService.getBySearch(query, page).then(data => setMovies(data.results))
    }, [page, query]);


    return (
        <>
            {/* Якщо movies.length > 0, то показуємо MoviesComponent */}
            {movies && movies.length > 0 ? (
                <MoviesComponent movies={movies} />
            ) : (<div className={`${styles.textBlock} ${theme}`}>
                    No movies available
                </div>
            )}
        </>
    );
}