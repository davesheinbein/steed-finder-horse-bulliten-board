import React from 'react';
import barn from '../BarnImg/barn.png';
import './Footer.css'
import FooterTop from '../FooterTop/FooterTop'


function Footer() {
  // Import result is the URL of your image
  return (
    <>
      <FooterTop />
      <div className='footer-container'>
        <div className='footer-left'>Created by D. Sheinbein <img src={barn} alt="Barn" className='barnFooterImg'></img></div>
        <div className='footer-right'>All Rights Reserved, &copy; 2020 Steed Finder</div>
      </div>
    </>
  )
}
export default Footer;