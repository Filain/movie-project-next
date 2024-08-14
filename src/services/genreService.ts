import {urls} from "@/constants/urls";
import {IGenreList} from "@/interfases/genresInterfase";
import {IData} from "@/interfases/movieInterfase";

const options: RequestInit = {
    cache: 'force-cache',
    next: {revalidate: 3600}, // 1 hour
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
    }
}

const genreService = {
    getAll: async (): Promise<IGenreList> => {
        try {
            // console.log("Sending request to:", `${urls.genre}`);
            // console.log("With options:", options);
            const res = await fetch(`${urls.genre}`, options)
            // console.log("Response received:", res);
            return await res.json()
        } catch (error) {
            console.error("Unknown error:", error);
            throw new Error("An unknown error occurred");
        }
    },
    getMoviesByGenre: async (page: string, with_genres: string): Promise<IData> => {
        try {
            const res = await fetch(`${urls.movies}?page=${page}&with_genres=${with_genres}`, options)
            return res.json()
        } catch (error) {
            console.error("Unknown error:", error);
            throw new Error("An unknown error occurred");
        }
    },
}

export {genreService}