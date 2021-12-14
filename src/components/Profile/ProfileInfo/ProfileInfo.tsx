import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoType = {
    profile: ProfileType,
}


const ProfileInfo:React.FC<ProfileInfoType> = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <br/>
                <ProfileStatus status={"any status"}/>
                <p><b>Имя:</b> {props.profile.fullName}</p>
                <p><b>Обо мне:</b> {props.profile.aboutMe}</p>
                <p><b>Что ищу:</b> {props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
    )
        ;
}



export default ProfileInfo;