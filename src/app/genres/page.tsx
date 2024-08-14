import {genreService} from "@/services/genreService";

import {IGenreList} from "@/interfases/genresInterfase";
import {GenresListComponents} from "@/components/GenresListComponents/GenresListComponents";

export default async function Genres() {
    const genres: IGenreList = await genreService.getAll()


    console.log('i am in genres page', genres)

    return (
        <div>
            <GenresListComponents genres={genres}/>
        </div>
    );
}