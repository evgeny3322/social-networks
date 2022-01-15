import React from 'react';
import s from './MyPosts.css';
import Post from "./Post/Post";

const MyPosts = () => {
    // let postsElements =
    //     props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    return <div className={s.content}>
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div>
                <Post message='Hi' likesCount='14'/>
                <Post message='How are u?' likesCount='14'/>
                <Post message='Very good!' likesCount='14'/>
            </div>
        </div>
    </div>


}


export default MyPosts;