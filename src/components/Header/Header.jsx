import React from 'react';
import { authMe } from '../../state/api';
import './header.css';
import Menu from './Menu/Menu';

function Header (props) {
    return (
        <header>
        <div className="logo">MESSENGER</div>
        <Menu/>
        <button onClick={props.onLogout}>logout</button>
        {props.authMe.isAuth ?
         <div className="user">
            <div className="user_name">{props.authMe.login}</div>
            <div className="user_photo"></div>
        </div> :
        <button>login</button> 
         } 
        
      </header>
    )
}

export default Header;