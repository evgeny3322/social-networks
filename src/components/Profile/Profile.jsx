import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <div className={s.content__main}>
            <div>
                <img src='logo.svg' alt=""/>
            </div>
            <div>
                ava+desc
            </div>
            <MyPosts/>
        </div>
    </div>


}


export default Profile;