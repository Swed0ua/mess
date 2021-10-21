import React from 'react';

function StatusArea (props) {

    let newStatus = React.createRef();

    let statusActive = () => {
        return(
            <>
            <input  autoFocus={true} value={props.text} onChange={()=>props.onChangeInputStatus(newStatus)} ref={newStatus}/>
            <button onClick={()=>props.onUpdateStatus(props.text)} >update</button>
            </>
        )
    }

    return (
        <div className="home-board__status status">
            {props.statusInput ?  statusActive()
                : <div onDoubleClick={()=>props.onActiveStatusInput()}>{props.text}</div>
            }
        </div>
)
}

export default StatusArea;