import React from 'react';
import { authMe } from '../../state/api';
import './header.css';
import logo from '../../img/ico/logo.png'
import Menu from './Menu/Menu';

function Header (props) {
    return (
        <header>
        <div className="logo"><img src={logo} alt="logo"/></div>
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