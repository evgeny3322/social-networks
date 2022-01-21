import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return <div className={s.content}>
        <div>
            <h3>
                My posts
            </h3>

            <div className={s.content__addpost}>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>

                <div>
                    <button onClick={addPost}>
                        add post
                    </button>
                </div>
            </div>

            <div>
                {postsElements}
            </div>

        </div>
    </div>


}


export default MyPosts;