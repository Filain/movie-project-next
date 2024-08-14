import {FC} from "react";
import {usePathname} from "next/navigation";
import styles from "@/components/HeaderComponent/NavLinkClientComponent/NavLinkClientComponent.module.css";
import Link from "next/link";

type IProps = {
    path: string,
    children: React.ReactNode,
}

const NavLinkGenres: FC<IProps> = ({path, children}) => {

    const pathname = usePathname();
    console.log(pathname)
    return (
        <div className={styles.wrap}>
            <Link href={path} className={pathname === path ? styles.active : ''}>
                {children}
            </Link>
        </div>
    );
};

export default NavLinkGenres;