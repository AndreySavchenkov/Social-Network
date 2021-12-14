import React, {useState} from "react";

type ProfileStatusType = {
    status: string
}

export const ProfileStatus: React.FC<ProfileStatusType> = (props) => {

    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={toggleEditMode}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={toggleEditMode} type="text" value={props.status}/>
                </div>
            }
        </div>

    )
}