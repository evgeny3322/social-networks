import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {


    let post = [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'How are u', likesCount: 13},
        {id: 3, message: 'Very good!', likesCount: 14},
    ]

    let postsElements = post
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return <div className={s.content}>
        <div>
            <h3>
                My posts
            </h3>

            <div>

                <div>
                    <textarea></textarea>
                </div>

                <div>
                    <button>add post</button>
                </div>

            </div>
            <div>
                {postsElements}
            </div>
        </div>
    </div>


}


export default MyPosts;