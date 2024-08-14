import {genreService} from "@/services/genreService";
import GenresListComponents from "@/components/GenresListComponents/GenresListComponents";

export default async function Genres() {

    // console.log('i am in genres page')
    return (
        <div>
            <GenresListComponents/>
        </div>
    );
}