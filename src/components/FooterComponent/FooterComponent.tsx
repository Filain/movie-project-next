'use client'
import {FC, PropsWithChildren} from "react";

import styles from './FooterComponent.module.css'
import {useAppSelector} from "@/redux/hook/reduxHooks";
import Image from "next/image";
import {useRouter} from "next/navigation";

interface IProps extends PropsWithChildren{

}

const FooterComponent: FC<IProps> = () => {
    const theme = useAppSelector((state) => state.theme.theme);
    const router = useRouter()

    const goYanky = (where: string) => {
        router.push(where)
    }

    return (
  <footer  className={`${styles.footer} ${theme}`}>
      <div className={styles.wrap}>
          <p>© 2024 Created by Volodymyr Fylypiv</p>
          <div>
          <Image className={styles.image} onClick={() => goYanky('https://github.com/Filain?tab=repositories')}  priority={true}  src={'/images/github.svg'} alt={'github'} width={30} height={30}/>
          <Image className={styles.image} onClick={() => goYanky('https://t.me/fil64')}  priority={true}  src={'/images/telegram.svg'} alt={'telegram'} width={30} height={30}/>
          </div> </div>
  </footer>
 );
};

export {FooterComponent};
