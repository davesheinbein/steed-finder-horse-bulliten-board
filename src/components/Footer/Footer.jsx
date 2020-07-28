import React from 'react';
import barn from '../BarnImg/barn.png';
import './Footer.css'
import horse from './horse_silhouette.png';


function Footer() {
  // Import result is the URL of your image
  return (
    <>
      <div className='page-footer'>
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text footer-header">Additional Resources</h5>
              <img src={horse} alt="Horse" className='horseImg' />
            </div>
            <div className="col l4 s12">
              <h5 className="white-text footer-header">Links</h5>
              <ul>
                <li className='footer-title-link'><a href='/'>Home</a></li>
                <li>Adopt an Animal: <a href='https://www.petfinder.com/'>https://www.petfinder.com/</a></li>
                <li>Racing Stats: <a href='https://www.equibase.com/stats/'>https://www.equibase.com/stats/</a></li>
                <li>Report Animal Abuse: <a href='https://www.humanesociety.org/resources/report-animal-cruelty'>https://www.humanesociety.org/</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container bottom-container">
            <div className='left left-text'>Created by D. Sheinbein <img src={barn} alt="Barn" className='barnFooterImg'></img></div>
            <div className='right right-text'>All Rights Reserved, &copy; 2020 Steed Finder</div>
          </div>
        </div>

      </div>
    </>
  )
}
export default Footer;