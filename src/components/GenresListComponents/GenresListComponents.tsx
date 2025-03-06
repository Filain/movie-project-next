'use client'

import NavLinkGenres from "@/components/GenresListComponents/NavLinkGenres/NavLinkGenres";
import {IGenreList} from "@/interfases/genresInterface";
import {FC, PropsWithChildren, useEffect, useState} from "react";

import styles from './GenresListComponents.module.css'


import {useTheme} from "@/theme/useTheme";

interface IProps extends PropsWithChildren {
    genres: IGenreList
}

const GenresListComponents: FC<IProps> = ({genres}) => {
    const [activePath, setActivePath] = useState<string | null>('28');
    console.log(activePath)
    const {theme} = useTheme();

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




