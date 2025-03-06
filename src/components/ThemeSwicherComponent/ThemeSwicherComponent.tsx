'use client'
import {FC, PropsWithChildren} from "react";
import Image from "next/image";

import styles from './ThemeSwicherComponent.module.css'

import {useTheme} from "@/theme/useTheme";
import {Theme} from "@/theme/ThemeContext";


interface IProps extends PropsWithChildren {

}

const ThemeSwicherComponent: FC<IProps> = () => {

    const {theme, toggleTheme} = useTheme();


    return (

        <Image className={styles.image} onClick={toggleTheme}
               src={theme === Theme.DARK ? '/images/night.svg' : '/images/day.svg'} alt={'theme'} width={30}
               height={30}/>

    );
};

export {ThemeSwicherComponent};
