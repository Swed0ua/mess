import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Menu (props) {
    return (
        <div className="menu">
          <ul>
            <li className="menu__item"><NavLink to="/home">A</NavLink></li>
            <li className="menu__item"><NavLink to="/searching">B</NavLink></li>
            <li className="menu__item"><NavLink to="/dialogs">C</NavLink></li>
            <li className="menu__item"><NavLink to="/friends">D</NavLink></li>
            <li className="menu__item"><NavLink to="/settings">E</NavLink></li>
            <li className="menu__item"><NavLink to="/other">F</NavLink></li>
          </ul>
        </div>
    )
}

export default Menu;