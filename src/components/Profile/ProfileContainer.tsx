import React, {useEffect} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStatePropsType = {
    profile: ProfileType
}

type MapDispatchPropsType = {
    setUserProfile: (profile: {}) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                props.setUserProfile(response.data);
            });
    }, [])



    return (
        <Profile profile={props.profile}/>
    );


};

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);