import React from "react";
import s from './ProfileInfo.module.scss';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";
import ninjaTurtle from './../../../assets/images/ninjaPicturejpg.jpg'

type ProfileInfoType = {
    profile: ProfileType,
    status: string,
}


const ProfileInfo: React.FC<ProfileInfoType> = (props) => {

    const background = {
        backgroundImage: `url(${ninjaTurtle})`,
    }

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.topImage} style={background}>

            </div>
            <div className={s.descriptionBlock}>
                <div className={s.infoContainer}>
                    <p><span>Name:</span> {props.profile.fullName}</p>
                    <p><span>Obout me:</span> {props.profile.aboutMe}</p>
                    <p><span>Find:</span> {props.profile.lookingForAJobDescription}</p>
                    <ProfileStatus status={props.status}/>
                </div>
                <div className={s.imageContainer}>
                    <img src={props.profile.photos.large}/>
                </div>

            </div>
        </div>
    )
}


export default ProfileInfo;