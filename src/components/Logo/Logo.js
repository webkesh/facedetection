import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './logo.css';

const Logo = () =>{
    return(
      <div className='pa3'>
            <Tilt className="Tilt tilt br3 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
            <div className="Tilt-inner b3"> <img  style={{paddingTop:'15px'}}alt='logo ' src={brain} /> </div>
            </Tilt>
       </div>
    );
}

export default Logo;