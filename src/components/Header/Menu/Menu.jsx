import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import homeIco from '../../../img/ico/iconForMes__HOME-gr_mesIco.png';
import messIco from '../../../img/ico/iconForMes__Messanger_gr_mesIco.png';
import searchIco from '../../../img/ico/iconForMes__WEB_gr_mesIco.png';
import friendsIco from '../../../img/ico/iconForMes__FRIENDS_gr_mesIco.png';
import settingsIco from '../../../img/ico/iconForMes__SUPPORT_gr_mesIco.png';

function Menu (props) {
    return (
        <div className="menu">
          <ul>
            <li className="menu__item"><NavLink to="/home"><img src={homeIco}/></NavLink></li>
            <li className="menu__item"><NavLink to="/searching"><img src={searchIco}/></NavLink></li>
            <li className="menu__item"><NavLink to="/dialogs"><img src={messIco}/></NavLink></li>
            <li className="menu__item"><NavLink to="/friends"><img src={friendsIco}/></NavLink></li>
            <li className="menu__item"><NavLink to="/settings"><img src={settingsIco}/></NavLink></li>
          </ul>
        </div>
    )
}

export default Menu;