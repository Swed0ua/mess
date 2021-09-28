import React from 'react';
import './dialogs.css'
import DialogsPreview from './DialogsPreview/DialogsPreview';
import DialogWrapper from './DialogWrapper/DialogWrapper';

function Dialogs (props) {
    return (
        <div className="dialogs app__noWrapContent">
            <DialogsPreview dialogs={props.appState.dialogs_reduser.dialogsPreview} />
            <DialogWrapper dispatch={props.dispatch} message={props.appState.dialogs_reduser.dialog} messageText = {props.appState.dialogs_reduser.messageText} />
        </div>
    )
}

export default Dialogs;