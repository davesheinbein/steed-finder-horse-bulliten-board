import React from 'react';
import HorseCard from '../HorseCard/HorseCard';

function HorseMarketplace(props) {
    return (
        <div className='HorseMarketplace'>
            {props.horses.map(horse =>
                <HorseCard
                    horse={horse}
                    
                    key={horse._id}
                />
            )}
        </div>
    )
}
export default HorseMarketplace;