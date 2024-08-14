import {IMovie} from "@/interfases/movieInterfase";
import {FC} from "react";
import {MovieComponent} from "@/components/Movies/MovieComponent/MovieComponent";
import {PaginationsComponent} from "@/components/PaginationsComponent/PaginationsComponent";

interface IProps {
    movies?:  [] | IMovie[],
    // page: string,
    // setQuery: SetURLSearchParams
}

const MoviesComponent: FC<IProps> = ({movies}) => {

    return (
        <div>
            {movies && movies.map(movie => <MovieComponent key={movie.id} movie={movie}/>
            )}
            <PaginationsComponent/>
        </div>
    )
}

export default MoviesComponent