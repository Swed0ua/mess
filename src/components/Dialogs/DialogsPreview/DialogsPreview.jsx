import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';

function DialogsPreview (props) {

    let dialogsPreviewCode = props.dialogs.map(el=>{
        return (<DialogsItem id = {el.id} name={el.name} lastMes={el.lastMes} newMes={el.newMes} active={el.active} />);
    })

    return (
    <div className="dialogs__preview">
        <h1 className="dialogs__title H1">Chats</h1>
        <div className='dialogs__area BlockTemplate'>
            {dialogsPreviewCode}
        </div>
    </div>
    )
}

export default DialogsPreview;