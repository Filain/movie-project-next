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
        <div key={char.id} >
            <Image src={`${poster}/${char.profile_path}`} alt={char.character} width={100} height={100}/>
            <div>{char.name}</div>
        </div>
    );
};

export {CharactersListComponent};
