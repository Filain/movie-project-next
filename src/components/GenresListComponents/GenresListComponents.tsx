import {genreService} from "@/services/genreService";

export default async function GenresListComponents()  {
    const genres = await genreService.getAll()
    console.log(genres)
    return (
        <ul>
            {genres.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
            ))}
            {/*{genres.genres.map((genre) => (*/}
            {/*    <li key={genre.id}>{genre.name}</li>*/}
            {/*))}*/}
        </ul>
    );
};


