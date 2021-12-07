import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => any
}
type MapStatePropsType = {
    profile: ProfileType
}
type OwnPropsType = MapStatePropsType & MapDispatchToPropsType
type PathParamType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamType> & OwnPropsType

export const ProfileContainer = (props: PropsType) => {
    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        props.getUserProfile(userId)

    }, [])
    return (
        <Profile profile={props.profile}/>
    );
};

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);