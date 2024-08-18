'use client'

import {FC, PropsWithChildren} from "react";
import {ICast} from "@/interfases/charactersInterface";
import {poster} from "@/constants/urls";
import Image from 'next/image';

import styles from './CharactersListComponent.module.css'
import {useAppSelector} from "@/redux/hook/reduxHooks";


interface IProps extends PropsWithChildren {
    char: ICast
}

const CharactersListComponent: FC<IProps> = ({char}) => {
    const theme = useAppSelector((state) => state.theme.theme);
    return (
        <div key={char.id} className={`${styles.wrap} ${theme}`} >
            {
                char.profile_path
                    ? <Image className={styles.image} src={`${poster}/${char.profile_path}`} alt={char.character} width={100} height={100}/>
                    : <Image className={styles.imageNot} src={'/images/notFound.svg'} alt={'Image not found '} width={80} height={80}/>
            }
            <p className={styles.text}>{char.name}</p>
        </div>
    );
};

export {CharactersListComponent};
