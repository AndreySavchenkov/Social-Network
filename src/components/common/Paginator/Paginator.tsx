import React, {FC, memo} from "react";
import styles from "../../Users/users.module.scss";


export type PaginatorType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator: FC<PaginatorType> = memo(({onPageChanged,currentPage,totalUsersCount, pageSize}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (

            <div className={styles.usersNumbersPages}>
                {pages.map(p => <div className={currentPage === p ? styles.selectedPage : ''}
                                     onClick={() => {
                                         onPageChanged(p)
                                     }}>{p}</div>)}
            </div>
    )
})



