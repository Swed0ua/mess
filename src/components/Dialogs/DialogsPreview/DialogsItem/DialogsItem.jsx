import React from 'react';
import { NavLink } from 'react-router-dom';

function DialogsItem (props) {

    let active = '-';
    let urlPage = '/dialogs/' + props.id;

    if(props.active == true) active = "act";

    return (
        <NavLink to={urlPage} className="dialogs__item">
            <div className="dialogs__ava account__ava">
                <img src="https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </div>
            <div className="dialogs__info">
                <div className="dialogs__dt">
                    <div className="dialogs__name account__name">{props.name}</div>
                    <div className="dialogs__messagePrev">{props.lastMes}</div>
                </div>
                <div className="dialogs__check">
                    <div className="dialogs__status">{active}</div>
                    <div className="dialogs__messageCurrent">{props.newMes}</div>
                </div>
            </div>
        </NavLink>
    )
}

export default DialogsItem;