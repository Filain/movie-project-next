import {urls} from "@/constants/urls";

const options: RequestInit = {

    next: {revalidate: 3600}, // 1 hour
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
    }
}

const trailerService  = {

    getAllById: async (id: string): Promise<any> => {
        try {
            const res = await fetch(`${urls.trailer(id)}`, options)
            return res.json()
        } catch (error) {
            console.error("Unknown error:", error);
            throw new Error("An unknown error occurred");
        }
    }
}

export {trailerService}