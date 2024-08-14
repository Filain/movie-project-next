'use client'

import NavLinkGenres from "@/components/GenresListComponents/NavLinkGenres/NavLinkGenres";
import {IGenreList} from "@/interfases/genresInterfase";
import {FC, PropsWithChildren, useState} from "react";

interface IProps extends PropsWithChildren {
    genres: IGenreList
}

const GenresListComponents: FC<IProps> = ({genres}) => {
    const [activePath, setActivePath] = useState<string | null>(null); // Стейт для збереження активного шляху

    return (
        <ul>
            {genres.genres.map((genre) => (
                <li key={genre.id}>
                    <NavLinkGenres
                        path={`${genre.id}`}
                        isActive={activePath === `${genre.id}`}
                        onClick={() => setActivePath(`${genre.id}`)}>
                        {genre.name}
                    </NavLinkGenres>
                </li>
            ))}
        </ul>
    );
};

export {GenresListComponents};




