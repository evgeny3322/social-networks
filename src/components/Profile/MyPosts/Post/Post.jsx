import React from 'react';
import s from './Post.css';

const Post = (props) => {


    return <div className={s.item}>
        <img/>
        {props.message}
        <div>
            <span>
                Like
            </span> {props.likesCount}
        </div>
    </div>


}


export default Post;