'use client'

import {FC} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";

import styles from './NavLinkClientComponent.module.css'

type IProps = {
    path: string,
    children: React.ReactNode,
}

const NavLinkClientComponent: FC<IProps> = ({path, children}) => {

    const pathname = usePathname();
    // console.log(pathname)
    return (
        <div className={styles.wrap}>
            <Link href={path} className={pathname === path ? styles.active : ''}>
                {children}
            </Link>
        </div>
    );
};

export default NavLinkClientComponent;