import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEZqFt23mGe6hKZMSn0sHUyrKUKKN7sNBQngcHrM5JGL-5adWr'/>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
};

export default DialogItem;