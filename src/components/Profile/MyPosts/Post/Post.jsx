import React from 'react';
import s from './Post.module.css';
import userPhoto from "../../../../assets/images/user.png"


const Post = ({like, message}) => {
    return (
        <div className={s.item}>
            <img src={userPhoto}/>
            {message}
            <div>
                <span>like {like}</span>
            </div>
        </div>
    )
};

export default Post;


