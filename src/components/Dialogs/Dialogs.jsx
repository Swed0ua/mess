import React from 'react';
import './dialogs.css'
import DialogsPreview from './DialogsPreview/DialogsPreview';
import DialogWrapperConteiner from './DialogWrapper/Dialog/DialogWrapperConteiner';

function Dialogs (props) {
    return (
        <div className="dialogs app__noWrapContent">
            <DialogsPreview dialogs={props.appState.getState().dialogs_reduser.dialogsPreview} />
            <DialogWrapperConteiner dispatch={props.dispatch} message={props.appState.getState().dialogs_reduser.dialog} messageText = {props.appState.getState().dialogs_reduser.messageText} />
        </div>
    )
}

export default Dialogs;