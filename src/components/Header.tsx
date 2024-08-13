import {movieService} from "@/services/movieService";
import Link from "next/link";
import NavLinkClientComponent from "@/components/NavLinkClientComponent/NavLinkClientComponent";
import Image from "next/image";

export default function Header() {

    return (
        <header>
            <p>The Movie Database</p>
            <nav>
                <ul>
                    <li><NavLinkClientComponent path={'/movie'}>Movie</NavLinkClientComponent></li>
                    <li><NavLinkClientComponent path={'/search'}>Search</NavLinkClientComponent></li>
                    <li><NavLinkClientComponent path={'/genres'}>Genres</NavLinkClientComponent></li>
                </ul>
            </nav>

            <div>
                <Image src={'../public/images/man.svg'} alt={'logo'} width={100} height={100}/>
            </div>

        </header>
    );
}