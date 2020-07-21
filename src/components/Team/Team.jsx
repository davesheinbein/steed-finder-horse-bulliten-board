import React from 'react';
import './Team.css'


function Team() {
    // Import result is the URL of your image
    return (
        <>
            <div className='team-container'>
                <div className='team-Heading'>Team</div>
                <div className='team-Content'>
                    <div className='horseJumpImgBgd rotate'></div>
                    <div className='team-text-content'>
                        Our team currently consists of one administrator.
                        <br />
                        He is responsible for managing and moderating all website actions.
                        <br />
                        Contact: <a href="mailto: davesheinbein123@gmail.com">davesheinbein123@gmail.com</a>
                        <br />
                        For any <span>questions</span> or <span>website</span> support
                        </div>
                </div>
                <br />
                <br />
            </div>
        </>
    )
}
export default Team;