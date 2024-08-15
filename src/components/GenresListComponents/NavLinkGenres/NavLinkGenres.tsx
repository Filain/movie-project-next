'use client'
import {FC} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import styles from "@/components/HeaderComponent/NavLinkClientComponent/NavLinkClientComponent.module.css";

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
        <div className={`${styles.wrap} ${Active  ? styles.active : ''}`}>
            <button onClick={genre}>{children}</button>
        </div>
    );
};

export default NavLinkGenres;

