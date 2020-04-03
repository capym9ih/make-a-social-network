import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.postsData.map(el => <Post message={el.message} like={el.likesCount}/>)

    let addPost = () => {
        props.addPost()
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text)
    };

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
};

export default MyPosts;


