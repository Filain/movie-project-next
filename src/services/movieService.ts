import {urls} from "@/constants/urls";
import {IData} from "@/interfases/movieInterfase";
import {IInfo} from "@/interfases/infoMovie";
import {options} from "@/constants/fetchOptions";

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

