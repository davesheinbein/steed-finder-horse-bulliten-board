import React from 'react';
import barn from '../BarnImg/barn.png'; 
import './Footer.css'


function Footer() {
  // Import result is the URL of your image
  return(
    <div className='footer'>
      <img src={barn} alt="Barn" className='barnFooterImg'/>
      <div>Steed Finder</div>
      <div></div>
    </div>
  ) 
}
export default Footer;