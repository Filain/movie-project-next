import {genreService} from "@/services/genreService";

import {IGenreList} from "@/interfases/genresInterface";
import {GenresListComponents} from "@/components/GenresListComponents/GenresListComponents";
import {GenreMovieComponent} from "@/components/GenreMovieComponent/GenreMovieComponent";
import ParallaxComponentServer from "@/components/ParallaxComponent/ParallaxComponentServer";

export default async function Genres() {
    const genres: IGenreList = await genreService.getAll()



    return (
        <div>
            <GenresListComponents genres={genres}/>

            <GenreMovieComponent/>
        </div>
    );
}