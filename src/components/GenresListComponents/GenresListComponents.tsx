'use client'

import NavLinkGenres from "@/components/GenresListComponents/NavLinkGenres/NavLinkGenres";
import {IGenreList} from "@/interfases/genresInterface";
import {FC, PropsWithChildren, useEffect, useState} from "react";

import styles from './GenresListComponents.module.css'
import {useAppSelector} from "@/redux/hook/reduxHooks";
import {useRouter, useSearchParams} from "next/navigation";

interface IProps extends PropsWithChildren {
    genres: IGenreList
}

const GenresListComponents: FC<IProps> = ({genres}) => {
    const [activePath, setActivePath] = useState<string | null>(null); // Стейт для збереження активного шляху
    const theme = useAppSelector((state) => state.theme.theme);
    const router = useRouter();
    const searchParams = useSearchParams()
    useEffect(() => {
        const query = new URLSearchParams(searchParams.toString());
        query.set("genreId", String(genres.genres[0].id));
        router.push(`?${query.toString()}`);
    }, [genres.genres, router, searchParams]);
    return (

        <div className={`${styles.genreList} ${theme}`}>
            <ul className={styles.genreListItems}>
                {genres.genres.map((genre) => (
                    <li key={genre.id} className={styles.genreListItem}>

                        <NavLinkGenres
                            path={`${genre.id}`}
                            isActive={activePath === `${genre.id}`}
                            onClick={() => setActivePath(`${genre.id}`)}>
                            {genre.name}
                        </NavLinkGenres>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export {GenresListComponents};




