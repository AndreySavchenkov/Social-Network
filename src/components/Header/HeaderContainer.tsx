import React, {useEffect} from "react";
import Header from "./Header";
import axios from "axios";

export const HeaderContainer  = () => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        })
            .then(response => {
                debugger
            });
    },[])

    return (
        <Header/>
    );
}

