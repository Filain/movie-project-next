'use client'

import {useEffect, useState} from "react";
import {IInfo} from "@/interfases/infoMovie";
import {useParams} from "next/navigation";
import {movieService} from "@/services/movieService";

import styles from './InfoMovieComponent.module.css'
import Link from "next/link";


export default function InfoMovieComponent() {
    const [info, setInfo] = useState<IInfo | null>(null)
    const {id} = useParams<{ id: string }>()

    useEffect(() => {
        movieService.getById(id).then(data => setInfo(data))
    }, [id]);

    if (!info) { // Перевірка на undefined або null
        return <div>Loading...</div>;
    }

    const {title, poster_path, overview, genres, release_date, vote_average, original_title, runtime} = info

    return (
        <div className={styles.wrap}>
            <div className={styles.title}>{title}</div>
            <div className={styles.title}>({original_title})</div>
            <div className={styles.block}>
                <div className={styles.miniBlock}><img src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                                                       alt={title}/>
                </div>
                <div className={styles.miniBlock}>
                    <p>rating</p>

                    <p>genres</p>
                    <div className={styles.text}>{
                        genres?.map((genre) => <Link href={`/genres?page=1&genreId=${genre.id}`}
                                                                              className={styles.link}
                                                                              key={genre.id}> {genre.name}  </Link>)}</div>
                    <p>runtime</p>
                    <div className={styles.text}>{runtime} min</div>
                    <p>release date</p>
                    <div className={styles.text}>{release_date}</div>
                </div>
            </div>
            <p>overview</p>
            <div className={styles.text}>{overview}</div>
        </div>
    );
};