'use client'

import NavLinkGenres from "@/components/GenresListComponents/NavLinkGenres/NavLinkGenres";
import {IGenreList} from "@/interfases/genresInterface";
import {FC, PropsWithChildren, useState} from "react";

import styles from './GenresListComponents.module.css'

interface IProps extends PropsWithChildren {
    genres: IGenreList
}

const GenresListComponents: FC<IProps> = ({genres}) => {
    const [activePath, setActivePath] = useState<string | null>(null); // Стейт для збереження активного шляху

    return (
        <div className={styles.genreList}>
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




