import Movie from "@/app/movie/page";
import {homeService} from "@/services/homeService";

export default async function Home() {
    const nowPlaying= await homeService.getNowPlaying()
    const popular = await homeService.getPopular()
    const topRated = await homeService.getTopRated()
    const upcoming= await homeService.getUpcoming()

    return (
<div></div>
    );
}
