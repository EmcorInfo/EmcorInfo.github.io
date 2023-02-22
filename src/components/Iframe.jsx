import React from 'react';

function Iframe() {
    return ( 
        <iframe 
  id="frame" 
  className='w-100' 
  style={{height:'600px'}} 
  title='medcloud' 
  src="https://www.medcloud.co/?page=emcor"
  frameborder="0"/>
     );
}

export default Iframe;