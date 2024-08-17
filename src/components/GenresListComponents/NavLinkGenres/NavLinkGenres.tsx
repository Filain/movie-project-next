'use client'
import {FC} from "react";
import {useRouter, useSearchParams} from "next/navigation";

import styles from './NavLinklGenres.module.css'

type IProps = {
    path: string,
    children: React.ReactNode,
    isActive: boolean,
    onClick: () => void,
}

const NavLinkGenres: FC<IProps> = ({path, children, isActive, onClick}) => {

    const router = useRouter();
    const searchParams = useSearchParams()
    const genreId = searchParams.get('genreId')
    const Active = isActive || genreId === path

    const genre = () => {
        // const query = new URLSearchParams(window.location.search);
        if (searchParams) {
            const query = new URLSearchParams(searchParams.toString());
            query.set("genreId", path);
            router.push(`?${query.toString()}`);
            onClick(); // Виклик функції для оновлення активного шляху
        }
    }

    return (

            <button onClick={genre} className={`${styles.wrap} ${Active ? styles.active : ''}`}>{children} </button>


    );
};

export default NavLinkGenres;

