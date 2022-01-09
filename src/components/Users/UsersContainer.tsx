import React, {useEffect} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, getFollow, getUnfollow, getUsers,
    setCurrentPage,
    unfollow, usersReducerActionsTypes,
    userType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersPage} from "../../redux/selectors";
import {Dispatch} from "redux";
import { ThunkDispatch } from "redux-thunk";


type MapStateToPropsType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>,
}

// type MapDispatchToPropsType = {
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
//     setUsers: (users: Array<userType>) => void
//     setCurrentPage: (pageNumber: number) => void
//     setTotalUsersCount: (totalCount: number) => void
//     toggleIsFetching: (isFetching: boolean, userId: number) => void
//     getFollow: (userId: number) => void
//     getUnfollow: (userId: number) => void
// }

//export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;

export const UsersContainer: React.FC = () => {

    const {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isFetching,
        followingInProgress,
    } = useSelector(usersPage)

    type appDispatch = ThunkDispatch<AppStateType,any,usersReducerActionsTypes>

    const thunkDispatch: appDispatch = useDispatch();

    useEffect(() => {
        thunkDispatch(getUsers(currentPage, pageSize))
    },[])

    const onPageChanged = (pageNumber: number) => {
        thunkDispatch(getUsers(pageNumber, pageSize))
    }


        return <>
            {isFetching ?
                <Preloader/> : null}
            <Users totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   users={users}
                   onPageChanged={onPageChanged}
                   followingInProgress={followingInProgress}

                   // follow={this.props.follow}
                   // unfollow={this.props.unfollow}
                   // toggleIsFollowing={this.props.toggleIsFollowing}
                   //
                   // getFollow={this.props.getFollow}
                   // getUnfollow={this.props.getUnfollow}
            />
        </>


}

// const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//
//     }
// }

// const maDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: Array<userType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

// export default connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     getUsers,
//     getFollow,
//     getUnfollow,
// })(UsersContainer)