import React from 'react';

function Message (props) {
    let messageClass = 'message'
    if (props.myMessge) messageClass += ' message__my';
    return (
        <div className = {messageClass}><p>{props.text}</p></div>
    )
}

export default Message;