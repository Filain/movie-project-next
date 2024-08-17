import {urls} from "@/constants/urls";
import {INowPlaying, IPopular, ITopRated, IUpcoming} from "@/interfases/movieInterface";

const options: RequestInit = {

    next: {revalidate: 3600}, // 1 hour
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
    }
}

const homeService = {
    getNowPlaying: async (page: string): Promise<INowPlaying> => {
        try {
            // console.log("Sending request to:", `${urls.genre}`);
            // console.log("With options:", options);
            const res = await fetch(`${urls.nowPlaying}?page=${page}`, options)
            // console.log("Response received:", res);
            return await res.json()
        } catch (error) {
            console.error("Unknown error:", error);
            throw new Error("An unknown error occurred");
        }
    },
    getPopular: async (page: string): Promise<IPopular> => {
        try {
            // console.log("Sending request to:", `${urls.genre}`);
            // console.log("With options:", options);
            const res = await fetch(`${urls.popular}?page=${page}`, options)
            // console.log("Response received:", res);
            return await res.json()
        } catch (error) {
            console.error("Unknown error:", error);
            throw new Error("An unknown error occurred");
        }
    },
    getTopRated: async (page: string): Promise<ITopRated> => {
        try {
            // console.log("Sending request to:", `${urls.genre}`);
            // console.log("With options:", options);
            const res = await fetch(`${urls.topRated}?page=${page}`, options)
            // console.log("Response received:", res);
            return await res.json()
        } catch (error) {
            console.error("Unknown error:", error);
            throw new Error("An unknown error occurred");
        }
    },
    getUpcoming: async (page: string): Promise<IUpcoming> => {
        try {
            // console.log("Sending request to:", `${urls.genre}`);
            // console.log("With options:", options);
            const res = await fetch(`${urls.upcoming}?page=${page}`, options)
            // console.log("Response received:", res);
            return await res.json()
        } catch (error) {
            console.error("Unknown error:", error);
            throw new Error("An unknown error occurred");
        }
    },

}

export {homeService}