import React from "react";
import styles from './users.module.scss'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/userImage.png'

class Users extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        

        return <div>
            <div >
                {pages.map(p => <span className={this.props.currentPage === p ? styles.selectedPage : ''}
                onClick={() => { this.props.setCurentPage(p) }}>{p}</span>)}
            </div>
            {this.props.users.map((u: { id: React.Key | null | undefined; photos: { small: string | null | undefined; }; followed: any; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; status: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
                <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.photo}
                         alt={'avatar'}/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                        : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
                </div>
            </span>
                    <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
                </div>)}
        </div>
    }
}

export default Users;