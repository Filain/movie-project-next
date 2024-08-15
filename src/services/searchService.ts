import {urls} from "@/constants/urls";
import {IData} from "@/interfases/movieInterfase";

const options: RequestInit = {

    next: {revalidate: 3600}, // 1 hour
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
    }
}
const searchService = {
    getBySearch: async (query: string, page: string): Promise<IData> => {
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