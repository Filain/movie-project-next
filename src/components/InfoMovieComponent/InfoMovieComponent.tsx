'use client'

import {useEffect, useState} from "react";
import {IInfo} from "@/interfases/infoMovieInterface";
import {useParams} from "next/navigation";
import {movieService} from "@/services/movieService";

import styles from './InfoMovieComponent.module.css'
import Link from "next/link";
import Image from "next/image";
import {charactersService} from "@/services/charactersService";
import {ICast} from "@/interfases/charactersInterface";
import {CharactersListComponent} from "@/components/CharactersListComponent/CharactersListComponent";
import {trailerService} from "@/services/trailerService";
import {IVideo} from "@/interfases/trailersInterface";
import Rating from "@/components/RatingStarComponent/RatingStarComponent";


export default function InfoMovieComponent() {
    const [info, setInfo] = useState<IInfo | null>(null)
    const [characters, setCharacters] = useState<ICast[]>([])
    const [trailers, setTrailers] = useState<IVideo[]>([])
    const teaser = trailers?.filter(item => item.type === 'Teaser' || item.type === 'Trailer')

    console.log(trailers)

    const {id} = useParams<{ id: string }>()

    useEffect(() => {
        movieService.getById(id).then(data => setInfo(data))
        charactersService.getAllById(id).then(data => setCharacters(data.cast))
        trailerService.getAllById(id).then(data => setTrailers(data.results))
    }, [id]);

    if (!info) { // Перевірка на undefined або null
        return <div>Loading...</div>;
    }

    const {title, poster_path, overview, genres, release_date, vote_average, original_title, runtime} = info
    const teaserKey = trailers.length===0 ? null : teaser[0].key

    return (
        <div className={styles.wrap}>
            <div className={styles.title}>{title}</div>
            <Rating rating={vote_average}/>

            <div className={styles.block}>
                <div className={styles.miniBlock}>
                    <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                           alt={title} width={500} height={500}/>
                </div>
                <div className={styles.miniBlock}>
                    <p>rating</p>

                    <p>genres</p>
                    <div className={styles.text}>{
                        genres?.map((genre) =>
                            <Link href={`/genres?page=1&genreId=${genre.id}`}
                                  className={styles.link}
                                  key={genre.id}>
                                {genre.name}
                            </Link>)}</div>
                    <p>runtime</p>
                    <div className={styles.text}>{runtime} min</div>
                    <p>release date</p>
                    <div className={styles.text}>{release_date}</div>
                </div>
            </div>
            <p>overview</p>

            <div className={styles.text}>{overview}</div>
            {teaserKey ? <div>
                <h4>Teaser:</h4>

                <iframe width="1400" height="790"
                        src={`https://www.youtube.com/embed/${teaser[0]?.key}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>

            </div> : null}


            <h4>Main Cast:</h4>
            <div className={styles.block}>
                {characters?.map(char => <CharactersListComponent key={char.id} char={char}/>)}
            </div>
        </div>
    );
};