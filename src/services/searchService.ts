import {options} from "@/constants/fetchOptions";
import {urls} from "@/constants/urls";
import {IData} from "@/interfases/movieInterfase";

const searchService = {
    getBySearch: async (query:string, page:string): Promise<IData> => {
        try {
            const res = await fetch(`${urls.search}?query=${query}&page=${page}`, options)
            return res.json()
        } catch (error) {
            console.error("Unknown error:", error);
            throw new Error("An unknown error occurred");
        }
    }
}

export {searchService}