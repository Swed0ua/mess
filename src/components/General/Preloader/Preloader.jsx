import React from 'react';
import './preloader.css'
import preloader from '../../../img/gif/preloader.gif'

function Preloader (props) {
    return (
        <div className="preloader__wrapper" >
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;