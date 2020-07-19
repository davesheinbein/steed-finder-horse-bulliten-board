import React from 'react';
import horseJump from './Horse-Jumping-Silhouette.png';
import './Team.css'


function Team() {
    // Import result is the URL of your image
    return (
        <>
            <div className='team-container'>
                <div className='team-subHeading'>Team</div>
                <div className='team-Content'>
                    <div className='horseJumpImgBgd rotate'></div>
                    <div className='team-text-content'>Our team currently consits of one admin</div>
                </div>
                <br />
                <br />
            </div>
        </>
    )
}
export default Team;