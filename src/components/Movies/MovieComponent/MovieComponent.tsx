import {FC, PropsWithChildren} from "react";
import {IMovie} from "@/interfases/movieInterfase";

interface IProps extends PropsWithChildren{
movie: IMovie
}

const MovieComponent: FC<IProps> = ({movie}) => {
 const {id, title, genre_ids}=movie
    return (
  <div>

    <p>{id}</p>
    <p>{title}</p>
    <p>{genre_ids}</p>

  </div>
 );
};

export {MovieComponent};
