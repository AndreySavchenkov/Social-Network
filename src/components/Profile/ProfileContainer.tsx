import React, {FC, memo, useEffect} from "react";
import {Profile} from "./Profile";
import {getStatus, getUserProfile, ProfileActionsTypes} from "../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {auth, profilePage} from "../../redux/selectors";
import {ThunkDispatch} from "redux-thunk";
import {compose} from "redux";


export type AppDispatch = ThunkDispatch<AppStateType, any, ProfileActionsTypes>;

type PathParamType = {
    userId: any
}
type PropsType = RouteComponentProps<PathParamType>

const ProfileContainer: FC<PropsType> = memo((props) => {

    const {
        id, isAuth
    } = useSelector(auth)

    const {
        profile, status
    } = useSelector(profilePage)

    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = id;
            if(!userId) {
                //@ts-ignore
                props.history.push('./login')
            }
        }
        dispatch(getUserProfile(userId))
        dispatch(getStatus(userId))
    })

    return (
        <Profile profile={profile} status={status}/>
    );
})

export default compose<React.ComponentType>(withRouter)(ProfileContainer);
