import React from 'react';
import horse from './horse_silhouette.png';
import './FooterTop.css'


function FooterTop() {
    // Import result is the URL of your image
    return (
        <>
            <div className='footer-top-container'>
                    <div className='footer-top-left'>
                    <img src={horse} alt="Horse" className='horseImg' />
                    </div>
                    <div className='footer-top-right'>
                        <div className='footer-title-link'><a href='/'>Home</a></div>
                        <div className='footer-title'>Additional Resources</div>
                        <ul>
                            <li>Adopt an Animal: <a href='https://www.petfinder.com/'>https://www.petfinder.com/</a></li>
                            <li>Racing Stats: <a href='https://www.equibase.com/stats/'>https://www.equibase.com/stats/</a></li>
                            <li>Report Animal Abuse: <a href='https://www.humanesociety.org/resources/report-animal-cruelty'>https://www.humanesociety.org/resources/report-animal-cruelty</a></li>
                        </ul>
                    </div>
            </div>
        </>
    )
}
export default FooterTop;