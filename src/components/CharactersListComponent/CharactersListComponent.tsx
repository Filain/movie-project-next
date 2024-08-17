import {FC, PropsWithChildren} from "react";
import {ICast} from "@/interfases/charactersInterface";
import {poster} from "@/constants/urls";
import Image from 'next/image';

import styles from './CharactersListComponent.module.css'


interface IProps extends PropsWithChildren {
    char: ICast
}

const CharactersListComponent: FC<IProps> = ({char}) => {

    return (
        <div key={char.id} className={styles.wrap} >
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
