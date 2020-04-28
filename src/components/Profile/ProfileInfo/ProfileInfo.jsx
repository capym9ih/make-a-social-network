import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVeQYN3ugmK2GH-MKXtQUf9m-537SIOCUobDG7xJeiutHTsyRN'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <div>
                    {props.profile.fullName}
                </div>
                <div>
                    Contacts:
                    <div>{props.profile.contacts.github}</div>
                    <div>{props.profile.contacts.vk}</div>
                    <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.instagram}</div>
                    <div>{props.profile.contacts.website}</div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;


