import {urls} from "@/constants/urls";
import {IGenreList} from "@/interfases/genresInterfase";
import {options} from "@/constants/fetchOptions";
import {IData} from "@/interfases/movieInterfase";

const genreService = {
    getAll: async (): Promise<IGenreList> => {
        try {
            const res = await fetch(`${urls.genre}`, options)
            return res.json()
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