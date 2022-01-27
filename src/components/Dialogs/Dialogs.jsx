import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {updateNewPostTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);

    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>);

    let newMessageElement = React.createRef();

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }


    return (

        <div className={s.dialogs}>
            <div className={s.dialogs__block}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

            <div className={s.messages__add}>
                <div>
                    <textarea onChange={onMessageChange} name="" id="" cols="30" rows="5"/>
                </div>

                <div>
                    <button >
                        add messages
                    </button>
                </div>
            </div>
        </div>

    )
}


export default Dialogs;