import React from 'react';
import Dialog from './Dialog';

function DialogWrapper (props) {
    return (
    <div className="dialog__wrapper">
        <div className="dialog__name">
            <h1 className="dialogs__title H1">Robert Lewandowsky</h1>
        </div>
        <Dialog dispatch={props.dispatch} message={props.message} messageText={props.messageText} />
    </div>
    )
}

export default DialogWrapper;