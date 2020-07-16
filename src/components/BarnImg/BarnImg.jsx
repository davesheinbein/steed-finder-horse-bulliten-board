import React from 'react';
import barn from './barn.png';
import './BarnImg.css'

// console.log(barn); 

function Barn() {
  // Import result is the URL of your image
  return (
    <div>
      <img src={barn} alt="Barn" className='barnImg' />
      <div className='titleText'>Steed Finder</div>
      <div className='subTitleText'>Horse Marketplace</div>
      <div className='subMessage'>Adopt an Animal today! <br></br> Visit: <a href='https://www.petfinder.com/'>https://www.petfinder.com/</a></div>
    </div>
  )
}
export default Barn;