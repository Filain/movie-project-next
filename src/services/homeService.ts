import {IGenreList} from "@/interfases/genresInterfase";
import {urls} from "@/constants/urls";
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

const homeService={
    getNowPlaying: async (): Promise<IGenreList> => {
        try {
            // console.log("Sending request to:", `${urls.genre}`);
            // console.log("With options:", options);
            const res = await fetch(`${urls.nowPlaying}`, options)
            // console.log("Response received:", res);
            return await res.json()
        } catch (error) {
            console.error("Unknown error:", error);
            throw new Error("An unknown error occurred");
        }
    },
    getPopular: async (): Promise<IGenreList> => {
        try {
            // console.log("Sending request to:", `${urls.genre}`);
            // console.log("With options:", options);
            const res = await fetch(`${urls.popular}`, options)
            // console.log("Response received:", res);
            return await res.json()
        } catch (error) {
            console.error("Unknown error:", error);
            throw new Error("An unknown error occurred");
        }
    },
    getTopRated: async (): Promise<IGenreList> => {
        try {
            // console.log("Sending request to:", `${urls.genre}`);
            // console.log("With options:", options);
            const res = await fetch(`${urls.popular}`, options)
            // console.log("Response received:", res);
            return await res.json()
        } catch (error) {
            console.error("Unknown error:", error);
            throw new Error("An unknown error occurred");
        }
    },
    getUpcoming: async (): Promise<IGenreList> => {
        try {
            // console.log("Sending request to:", `${urls.genre}`);
            // console.log("With options:", options);
            const res = await fetch(`${urls.upcoming}`, options)
            // console.log("Response received:", res);
            return await res.json()
        } catch (error) {
            console.error("Unknown error:", error);
            throw new Error("An unknown error occurred");
        }
    },

}

export {homeService}