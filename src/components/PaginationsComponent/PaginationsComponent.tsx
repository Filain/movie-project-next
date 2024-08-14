'use client'
import {FC, PropsWithChildren, useCallback} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {log} from "node:util";

interface IProps extends PropsWithChildren {

}

const PaginationsComponent: FC<IProps> = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentPage = searchParams.get('page')

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    )

    if(!currentPage){
        router.push(pathname + '?' + createQueryString('page', '1'))
    }

    const prev = () => {
        router.push(pathname + '?' + createQueryString('page', `${Number(searchParams.get('page')) - 1}`))
    }
    const next = () => {
        router.push(pathname + '?' + createQueryString('page', `${Number(searchParams.get('page')) + 1}`))
    }


    return (
        <div>
            <button onClick={prev} disabled={Number(currentPage)<=1}>prev</button>
            {currentPage}
            <button onClick={next} disabled={Number(currentPage)>=500} >next</button>
        </div>
    );
};

export {PaginationsComponent};
