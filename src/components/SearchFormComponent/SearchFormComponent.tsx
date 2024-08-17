'use client'

import {SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/navigation";

import styles from './SearchFormComponent.module.css'
import Image from "next/image";

interface ISearchInput {
    search: string
}

export default function SearchFormComponent() {
    const router = useRouter()

    const {register, handleSubmit, reset} = useForm<ISearchInput>()


    const onSubmit: SubmitHandler<ISearchInput> = async (data) => {
        if (data.search) {
            await router.push('/search?query=' + data.search)
            reset()
        }
    }


    return (

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input {...register('search')} placeholder={'search'} className={styles.input}/>
            <button className={styles.button}>
                {/*<div className={styles.imageContainer}>*/}
                <Image src={'/images/search.svg'} alt={'search'} width={28} height={28}/>
                {/*</div>*/}
            </button>
        </form>

    );
};