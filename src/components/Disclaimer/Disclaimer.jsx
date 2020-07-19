import React from 'react';
import './Disclaimer.css'


function Disclaimer() {
    // Import result is the URL of your image
    return (
        <>
            <div className='disclaimer-container'>
                <div className='disclaimer'>
                    <div className='disclaimer-title'>
                        Disclaimer
                    </div>
                    The administrator doesn't control what users post and has no connection to listed horses themselve.
                    <br />
                    Any issues with the sale, listing, etc will have to be dealt with by the person who listed the horse
                </div>
            </div>
        </>
    )
}
export default Disclaimer;