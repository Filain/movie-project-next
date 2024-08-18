'use client'
import Image from "next/image";

import styles from './HeaderComponent.module.css'

import SearchFormComponent from "@/components/SearchFormComponent/SearchFormComponent";
import {ThemeSwicherComponent} from "@/components/ThemeSwicherComponent/ThemeSwicherComponent";
import {useAppSelector} from "@/redux/hook/reduxHooks";
import {usePathname, useRouter} from "next/navigation";

export default function HeaderComponent() {
    const theme = useAppSelector((state) => state.theme.theme);
    const router = useRouter();
    const pathname = usePathname();

    const onClick = (path: string) => {
        router.push(path);
    };

    return (
        <header className={`${styles.header} ${theme}`}>
            <div className={styles.wrap}>
                <button className={(pathname === '/' ? styles.active : '') + ' ' + styles.link}
                        onClick={() => onClick('/')}>MovieD
                </button>

                <nav className={styles.navigation}>

                    <button className={(pathname === '/now_playing' ? styles.active : '') + ' ' + styles.link}
                            onClick={() => onClick('/now_playing')}>Now Playing
                    </button>

                    <button className={(pathname === '/popular' ? styles.active : '') + ' ' + styles.link}
                            onClick={() => onClick('/popular')}>Popular
                    </button>

                    <button className={(pathname === '/top_rated' ? styles.active : '') + ' ' + styles.link}
                            onClick={() => onClick('/top_rated')}>Top Rated
                    </button>

                    <button className={(pathname === '/upcoming' ? styles.active : '') + ' ' + styles.link}
                            onClick={() => onClick('/upcoming')}>Upcoming
                    </button>

                </nav>

                <nav className={styles.navigation}>

                    <button className={(pathname === '/movie' ? styles.active : '') + ' ' + styles.link}
                            onClick={() => onClick('/movie')}>Movie
                    </button>

                    <button className={(pathname === '/genres' ? styles.active : '') + ' ' + styles.link}
                            onClick={() => onClick('/genres')}>Genres
                    </button>

                </nav>

                <SearchFormComponent/>
                <ThemeSwicherComponent/>

                <div>
                    <Image className={styles.image} src={'/images/man.svg'} alt={'logo'} width={50} height={50}
                           onClick={() => onClick('https://www.linkedin.com/in/volodymyr-fylypiv/')}/>
                </div>
            </div>

        </header>
    );
}