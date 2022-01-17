import React from 'react';
import s from './MyPosts.css';
import Post from "./Post/Post";



const MyPosts = () => {
    // let postsElements =
    //     props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);
    let postData = [
        {id: 1, message: 'Hi', likesCount:12},
        {id: 2, message: 'How are u', likesCount:13},
        {id: 3, message: 'Very good!', likesCount:14},
    ]

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
                <Post message={postData[2].message} likesCount={postData[2].likesCount}/>
            </div>
        </div>
    </div>


}


export default MyPosts;