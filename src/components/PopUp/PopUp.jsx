import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getPopUpStatus } from '../../state/selects';
import { onChangePopUpStatus } from '../../state/thunk';
import './popup.css';

const PopUp = (props) => {

    let [popUpStatus, setPopUpStatus] = useState(props.popUp);
    let popUpClass = 'pop-up__wrapper ';

    let dispatch = useDispatch()

    if(popUpStatus) popUpClass += '_active'

    useEffect(()=>{
        setPopUpStatus(props.popUp)
    }, [props.popUp])

    return(
        <div className={popUpClass}>
            <div className='pop-up'>
                <h1>Change main photo</h1>
                <input type="file"/>
                <button>Change</button>
                <button onClick={()=> dispatch(onChangePopUpStatus(false))} className='pop-up__close'>x</button>
            </div>
        </div>
    )
}

let mapStoreToProps = (state) => {
    return{
        popUp: getPopUpStatus(state)
    }
};

export default  connect(mapStoreToProps ,null)(PopUp);

