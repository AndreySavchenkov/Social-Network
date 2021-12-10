import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {getUserProfile, ProfileActionsTypes} from "../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {auth, profilePage} from "../../redux/selectors.";
import {ThunkDispatch} from "redux-thunk";


type AppDispatch = ThunkDispatch<AppStateType, any, ProfileActionsTypes>;

type PathParamType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamType>

const ProfileContainer: React.FC<PropsType> = (props) => {

    const {
        profile
    } = useSelector(profilePage)

    const {
        isAuth
    } = useSelector(auth)

    const dispatch: AppDispatch = useDispatch();


    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        dispatch(getUserProfile(userId))

    }, [])

    if (!isAuth) return <Redirect to={'/login'}/>

    return (
        <Profile profile={profile}/>
    );
};

export default withRouter(ProfileContainer)