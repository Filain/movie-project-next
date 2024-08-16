import {urls} from "@/constants/urls";
import {IData} from "@/interfases/movieInterface";
import {IInfo} from "@/interfases/infoMovieInterface";

const options: RequestInit = {

    next: {revalidate: 3600}, // 1 hour
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
    }
}

const movieService = {
    getAll: async (page: string): Promise<IData> => {
        try {
            const res = await fetch(`${urls.movies}?page=${page}`, options)
            return res.json()
        } catch (error) {
            console.error("Unknown error:", error);
            throw new Error("An unknown error occurred");
        }
    },

    getById: async (id: string): Promise<IInfo> => {
        try {
            const res = await fetch(`${urls.info.byId(+id)}`, options)
            return res.json()
        } catch (error) {
            console.error("Unknown error:", error);
            throw new Error("An unknown error occurred");
        }
    }

}

export {movieService}

