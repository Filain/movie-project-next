import {movieService} from "@/services/movieService";


export default function Movie() {
    movieService.getAll('1').then(data=>console.log(data))
    return (
        <div>Movie</div>
    );
}