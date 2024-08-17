import NavLinkClientComponent from "@/components/HeaderComponent/NavLinkClientComponent/NavLinkClientComponent";
import Image from "next/image";

import styles from './HeaderComponent.module.css'
import Link from "next/link";
import SearchFormComponent from "@/components/SearchFormComponent/SearchFormComponent";

export default function HeaderComponent() {

    return (
        <header className={styles.header}>
            <Link href={'/'}  className={styles.logo}>The Movie Database</Link>
            <nav>
                <ul>
                    <li><NavLinkClientComponent path={'/now_playing'}>Now Playing</NavLinkClientComponent></li>
                    <li><NavLinkClientComponent path={'/popular'}>Popular</NavLinkClientComponent></li>
                    <li><NavLinkClientComponent path={'/top_rated'}>Top Rated</NavLinkClientComponent></li>
                    <li><NavLinkClientComponent path={'/upcoming'}>Upcoming</NavLinkClientComponent></li>
                </ul>

            </nav>
            <nav>
                <ul>
                    <li><NavLinkClientComponent path={'/movie'}>Movie</NavLinkClientComponent></li>
                    <li><NavLinkClientComponent path={'/genres'}>Genres</NavLinkClientComponent></li>
                </ul>
            </nav>

            <SearchFormComponent/>

            <div>
                <Image src={'/images/man.svg'} alt={'logo'} width={50} height={50}/>
            </div>

        </header>
    );
}