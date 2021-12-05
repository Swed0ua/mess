import React from 'react';
import './preloadPage.css';
import background from '../../../img/background/FEST_logo_poster-wrapper.jpg'
import logoColour from '../../../img/ico/FEST_logo_det.png'
import Preloader from '../Preloader/Preloader';

const PreloadPage = (props) => {
    const load = background;

    return (
        <div className="preloadPage__wrapper">
           {/*  <div className='preloadPage__background'><img src={background} loading='lazy'/></div>
            <div className='preloadPage__logoColour'>
                <img src={logoColour}/> */}
                <div className="preloadPage__preloader">
                    <p>loading...</p>
                    <Preloader />    
                </div>
                {/* <input type="file" onChange={ (e)=>{
                    console.log(e.target.value)
                }} />
            </div> */} 
            
        </div>
    )
}

export default PreloadPage;