import {homeService} from "@/services/homeService";
import {ParallaxComponentClient} from "@/components/ParallaxComponent/ParallaxComponentClient/ParallaxComponentClient";

export default async function  ParallaxComponentServer  ()  {
    const nowPlaying = await homeService.getNowPlaying()
    return (
        <div>
            <ParallaxComponentClient nowPlaying={nowPlaying} />
        </div>
    );
};

