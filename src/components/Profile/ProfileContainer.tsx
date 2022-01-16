import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {getStatus, getUserProfile, ProfileActionsTypes} from "../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profilePage} from "../../redux/selectors";
import {ThunkDispatch} from "redux-thunk";
import {compose} from "redux";


export type AppDispatch = ThunkDispatch<AppStateType, any, ProfileActionsTypes>;

type PathParamType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamType>

const ProfileContainer: React.FC<PropsType> = React.memo((props) => {

    const {
        profile, status
    } = useSelector(profilePage)

    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = '19640';
        }
        dispatch(getUserProfile(userId))
        dispatch(getStatus(userId))
    })

    return (
        <Profile profile={profile} status={status}/>
    );
})

export default compose<React.ComponentType>(withRouter)(ProfileContainer);
