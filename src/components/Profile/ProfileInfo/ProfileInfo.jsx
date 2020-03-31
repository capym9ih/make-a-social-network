import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVeQYN3ugmK2GH-MKXtQUf9m-537SIOCUobDG7xJeiutHTsyRN'/>
            </div>
            <div className={s.descriptionBlock}>
                Ava+discription
            </div>
        </div>
    )
};

export default ProfileInfo;


