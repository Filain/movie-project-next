'use client'
import {FC, PropsWithChildren, useEffect, useState} from "react";
import Image from "next/image";

import styles from './ThemeSwicherComponent.module.css'
import {useAppDispatch} from "@/redux/hook/reduxHooks";
import {ETheme, themeActions} from "@/redux/slices/themeSlice";


interface IProps extends PropsWithChildren{

}

const ThemeSwicherComponent: FC<IProps> = () => {

    const dispatch = useAppDispatch();

    // Встановлюємо початкову тему як undefined, поки не з'ясуємо з localStorage
    const [theme, setTheme] = useState<ETheme | undefined>(undefined);

    useEffect(() => {
        // Отримуємо тему з localStorage
        const themeLocal = localStorage.getItem('theme');

        if (themeLocal !== null) {
            const storedTheme: ETheme = JSON.parse(themeLocal);
            setTheme(storedTheme);
            dispatch(themeActions.themeChange(storedTheme));
        } else {
            // Якщо теми немає в localStorage, встановлюємо значення за замовчуванням
            setTheme(ETheme.light);
            localStorage.setItem('theme', JSON.stringify(ETheme.light));
            dispatch(themeActions.themeChange(ETheme.light));
        }
    }, [dispatch]);

    const changeTheme = () => {
        // Перемикаємо тему на протилежну
        const newTheme = theme === ETheme.light ? ETheme.dark : ETheme.light;
        setTheme(newTheme);
        localStorage.setItem('theme', JSON.stringify(newTheme));
        dispatch(themeActions.themeChange(newTheme));
    };
    return (

   <Image className={styles.image} onClick={changeTheme} src={theme === ETheme.dark ? '/images/night.svg' : '/images/day.svg'} alt={'theme'} width={30} height={30}/>

 );
};

export {ThemeSwicherComponent};
