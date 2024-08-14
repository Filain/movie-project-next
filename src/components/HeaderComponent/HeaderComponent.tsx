import NavLinkClientComponent from "@/components/HeaderComponent/NavLinkClientComponent/NavLinkClientComponent";
import Image from "next/image";

import styles from './HeaderComponent.module.css'

export default function HeaderComponent() {

    return (
        <header className={styles.header}>
            <p>The Movie Database</p>
            <nav>
                <ul>
                    <li><NavLinkClientComponent path={'/movie'}>Movie</NavLinkClientComponent></li>
                    <li><NavLinkClientComponent path={'/search'}>Search</NavLinkClientComponent></li>
                    <li><NavLinkClientComponent path={'/genres'}>Genres</NavLinkClientComponent></li>
                </ul>
            </nav>

            <div>
                <Image src={'/images/man.svg'} alt={'logo'} width={50} height={50}/>
            </div>

        </header>
    );
}