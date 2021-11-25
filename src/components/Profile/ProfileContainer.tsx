import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";




type IProps = {
    setUserProfile: (response: {} ) => void
    profile: ProfileType
}

class ProfileContainer extends React.Component<IProps>{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }


    render(){
        return (
           <Profile profile={this.props.profile}/>
        );
    }

};

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default  connect(mapStateToProps,{setUserProfile})(WithUrlDataContainerComponent);