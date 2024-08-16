'use client'

import {FC, PropsWithChildren} from "react";
import {IMovie} from "@/interfases/movieInterface";

import styles from './MovieComponent.module.css'
import Image from "next/image";
import {useRouter} from "next/navigation";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const MovieComponent: FC<IProps> = ({movie}) => {
    const {id, original_title, poster_path, vote_average} = movie
    const router = useRouter()

    const nav = () => {
        router.push(`/movie/${id}`)
    }

    return (
        <div className={styles.Movie} onClick={nav}>
            <div>{poster_path ?
                <Image className={styles.img_poster} src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                       alt={original_title} width={150} height={200}/>
                :
                <Image className={styles.img_poster} src={'/images/notFound.png'} alt={'Image not found '} width={150}
                       height={200}/>}

            </div>


            <p className={styles.title}>{original_title}</p>
        </div>
    );
};

export {MovieComponent};
