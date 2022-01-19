import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsBlock = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={s.dialogs__item}>
        {/*<NavLink to={path}>*/}
        {/*    {props.name}*/}
        {/*</NavLink>*/}
        <NavLink to={path} className={dialogsLink => dialogsLink.isActive ? s.activeLink:s.dialogs__item}>
            {props.name}
        </NavLink>
    </div>
};

const Message = (props) => {
    return < div className={s.message}>
        {props.message}
    < /div>
};

let dialogs = [
    {id: 1, name: 'Name1'},
    {id: 2, name: 'Name2'},
    {id: 3, name: 'Name3'},
]

let messages = [
    {id: 1, message: "Hi[1]"},
    {id: 2, message: "Hi[2]"},
    {id: 3, message: "Hi[3]"},
]

let dialogsElements = dialogs
    .map(d => <DialogsBlock name={d.name} id={d.id}/>);

let messagesElements = messages
    .map(m => <Message message={m.message} id={m.id}/>);

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__block}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;