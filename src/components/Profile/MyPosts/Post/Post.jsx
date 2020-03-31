import React from 'react';
import s from './Post.module.css';

const Post = ({like, message}) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEZqFt23mGe6hKZMSn0sHUyrKUKKN7sNBQngcHrM5JGL-5adWr'/>
            {message}
            <div>
                <span>like {like}</span>
            </div>
        </div>
    )
};

export default Post;


