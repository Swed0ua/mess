import React from 'react';
import Message from './Message/Message';
import {addMessageActionCreator, inputMessageChangeActionCreator} from '../../../../state/dialogs_reduser'

function Dialog (props) {

    let newMessage = React.createRef();

    let messageAdd = () => {
        props.dispatch(addMessageActionCreator())
    }

    let messageInputChange = () => {
        let text = newMessage.current.value;
        props.dispatch(inputMessageChangeActionCreator(text))
    }


    let dialogCode = props.message.map((el)=>{
        return (<Message text={el.text} myMessge={el.my} />) 
    })

    return (
        <div className="dialog__area BlockTemplate">
            <div className="message__wrapper">
                {dialogCode}
            </div>
            <div className="message__creator BlockTemplate">
                <div className="message__buttons">
                    <button onClick={messageAdd}>Sent</button>
                </div>
                <textarea value={props.messageText} onChange={messageInputChange} className="message__area" ref={newMessage}></textarea>
            </div>
        </div>
    )
}

export default Dialog;