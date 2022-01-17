import React from 'react';
import s from './Post.module.css';

const Post = (props) => {


    return <div className={s.item}>
        <div>
            <img className={s.post__image} src='https://img2.freepng.ru/20180604/xhq/kisspng-lebron-james-funny-face-cleveland-cavaliers-youtub-james-5b14d5eb4382b4.6487036815280921392765.jpg' alt=""/>
        </div>
            {props.message}
        <div>
            <span>
                Like
            </span> {props.likesCount}
        </div>
    </div>


}


export default Post;