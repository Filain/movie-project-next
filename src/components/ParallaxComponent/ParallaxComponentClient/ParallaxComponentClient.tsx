'use client'

import { FC, PropsWithChildren, useEffect, useState } from "react";
import { IMovie, INowPlaying } from "@/interfases/movieInterface";
import Image from "next/image";
import styles from './ParallaxComponentClient.module.css';

interface IProps extends PropsWithChildren {
    nowPlaying: INowPlaying;
}

const ParallaxComponentClient: FC<IProps> = ({ nowPlaying }) => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [posterIndex, setPosterIndex] = useState(0);
    const [animationKey, setAnimationKey] = useState(0); // Додаємо ключ для анімації

    useEffect(() => {
        const topTenMovies = nowPlaying.results.slice(0, 10);
        setMovies(topTenMovies);
    }, [nowPlaying]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPosterIndex((prevIndex) =>
                prevIndex === movies.length - 1 ? 0 : prevIndex + 1
            );
            setAnimationKey(prevKey => prevKey + 1); // Оновлюємо ключ анімації
        }, 5000); // Затримка тут

        return () => clearInterval(intervalId);
    }, [movies]);

    return (
        <div className={styles.wrap}>
            <div className={styles.titleBox}>
                <p className={`${styles.title} ${styles.fadessIn}`}>{movies[posterIndex]?.original_title}</p>
            </div>

            {movies.length > 0 && (
                <div className={styles.imageWrapper}>
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${movies[posterIndex]?.poster_path}`}
                        alt={movies[posterIndex]?.original_title}
                        width={1440}
                        height={500}
                        className={`${styles.image} ${styles.fadeIn}`}
                        key={animationKey}
                        priority
                    />
                </div>
            )}
        </div>
    );
};

export { ParallaxComponentClient };
