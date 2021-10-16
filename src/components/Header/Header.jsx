import React from 'react';
import { authMe } from '../../state/api';
import './header.css';
import Menu from './Menu/Menu';

function Header (props) {
    console.log(props)
    return (
        <header>
        <div className="logo">MESSENGER</div>
        <Menu/>
        {props.authMe.id ?
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