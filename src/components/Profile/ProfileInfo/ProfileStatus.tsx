import React, {FC, memo, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../ProfileContainer";
import {updateStatus} from "../../../redux/profile-reducer";

type ProfileStatusType = {
    status: string
}

export const ProfileStatus: FC<ProfileStatusType> = memo((props) => {

    const dispatch: AppDispatch = useDispatch();

    const [editMode, setEditMode] = useState(false);
    const [localStatus, setLocalStatus] = useState(props.status)

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    const onStatusChange = (e: any) => {
        setLocalStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setLocalStatus(props.status)
    }, [props.status])

    useEffect(() => {
        dispatch(updateStatus(localStatus))
    }, [dispatch, localStatus])

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={toggleEditMode}>Status: {localStatus || '--------'} </span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onBlur={toggleEditMode} type="text" value={localStatus}
                       onChange={onStatusChange}/>
            </div>
            }
        </div>
    )
})