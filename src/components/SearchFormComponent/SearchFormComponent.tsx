'use client'

import {SubmitHandler, useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {searchService} from "@/services/searchService";
import {useSearchParams} from "next/navigation";
import MoviesComponent from "@/components/Movies/MoviesComponent";
import {IMovie} from "@/interfases/movieInterface";

interface ISearchInput {
    search: string
}

export default function SearchFormComponent() {
    const [query, setQuery] = useState<string>('')
    const searchParams = useSearchParams()
    const {register, handleSubmit, reset} = useForm<ISearchInput>()

    const page = searchParams.get('page') || '0'
    const [movies, setMovies] = useState<IMovie[]>()
    useEffect(() => {
        searchService.getBySearch(query, page).then(data => setMovies(data.results))
    }, [page, query]);




    const onSubmit: SubmitHandler<ISearchInput> = async (data) => {
        setQuery(data.search)
        reset()
    }



    return (
<div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('search')}/>
            <button>Search</button>
        </form>
    <MoviesComponent movies={movies}/>
</div>
    );
};