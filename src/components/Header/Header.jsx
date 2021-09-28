import React from 'react';
import './header.css';
import Menu from './Menu/Menu';

function Header (props) {
    return (
        <header>
        <div className="logo">MESSENGER</div>
        <Menu/>
        <div className="user">
            <div className="user_name">User First</div>
            <div className="user_photo"></div>
        </div>
      </header>
    )
}

export default Header;