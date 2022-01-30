import React, {FC, memo} from "react";
import s from './ProfileInfo.module.scss';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";
import ninjaTurtle from './../../../assets/images/ninjaPicturejpg.jpg'

type ProfileInfoType = {
    profile: ProfileType,
    status: string,
}

const ProfileInfo: FC<ProfileInfoType> = memo(({profile,status}) => {

    const background = {
        backgroundImage: `url(${ninjaTurtle})`,
    }

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.wrapper}>
            <div className={s.topImage} style={background}>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.infoContainer}>
                    <p><span>Name:</span> {profile.fullName}</p>
                    <p><span>Obout me:</span> {profile.aboutMe}</p>
                    <p><span>Find:</span> {profile.lookingForAJobDescription}</p>
                    <ProfileStatus status={status}/>
                </div>
                <div className={s.imageContainer}>
                    <img src={profile.photos.large}/>
                </div>
            </div>
        </div>
    )
})


export default ProfileInfo;