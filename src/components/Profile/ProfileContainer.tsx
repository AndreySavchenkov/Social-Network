import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


type MapStateToProps = {
    profile: any
}

type IProps = {
    setUserProfile: (response: {} ) => void
    profile: {}
}

class ProfileContainer extends React.Component<IProps>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

let mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile
})

export default  connect(mapStateToProps,{setUserProfile})(ProfileContainer);