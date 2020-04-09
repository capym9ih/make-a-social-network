import React from "react";
import preloader from "../../../assets/images/preloader.svg";
import s from "./preloader.module.css";


const Preloader = (props) => {
    return <div>
       <img src={preloader} className={s.preloader}/>
    </div>
}

export default Preloader;
