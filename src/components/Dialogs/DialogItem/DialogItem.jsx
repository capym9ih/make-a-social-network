import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user.png"

const DialogItem = (props) => {
    return <div className={s.dialog}>
        <img src={userPhoto}/>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
};

export default DialogItem;