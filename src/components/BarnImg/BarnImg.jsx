import React from 'react';
import barn from './barn.png'; 
import './BarnImg.css'

// console.log(barn); 

function Barn() {
  // Import result is the URL of your image
  return(
    <div>
      <img src={barn} alt="Barn" className='barnImg'/>
      <div className='titleText'>Steed Finder</div>
    </div>
  ) 
}
export default Barn;