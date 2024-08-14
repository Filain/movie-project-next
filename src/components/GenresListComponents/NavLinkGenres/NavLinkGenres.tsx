'use client'
import {FC, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import styles from "@/components/HeaderComponent/NavLinkClientComponent/NavLinkClientComponent.module.css";

type IProps = {
    path: string,
    children: React.ReactNode,

}

const NavLinkGenres: FC<IProps> = ({path, children}) => {
    const [activePath, setActivePath] = useState<string | null>(null); // Стейт для збереження активного шляху
    const searchParams = useSearchParams();
    const router = useRouter();

    const genre = () => {

        const query = new URLSearchParams(searchParams.toString());
        query.set("query", path);
        router.push(`?${query.toString()}`);
        setActivePath(path); // Встановлення нового активного шляху
        }


    const isActive = activePath === path;

    return (
        <div className={`${styles.wrap} ${isActive ? styles.active : ''}`}>
            <button onClick={genre}>{children}</button>
        </div>
    );
};

export default NavLinkGenres;