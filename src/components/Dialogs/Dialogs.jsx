import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsBlock = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={s.dialogs__item}>
        <NavLink to={path}>
            {props.name}
        </NavLink>
    </div>
};

const Message = (props) => {
    return < div className={s.message}>
        {props.message}
    < /div>
};

let dialogsData = [
    {id: 1, name: 'Name1'},
    {id: 2, name: 'Name2'},
    {id: 3, name: 'Name3'},
]
let messagesData = [
    {id: 1, message: "Hi[1]"},
    {id: 2, message: "Hi[2]"},
    {id: 3, message: "Hi[3]"},
]

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__block}>
                <DialogsBlock name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsBlock name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsBlock name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>

            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
            </div>
        </div>
    )
}

export default Dialogs;