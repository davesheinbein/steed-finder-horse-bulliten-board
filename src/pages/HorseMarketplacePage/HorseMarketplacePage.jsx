import React from 'react';
import HorseMarketplaceItem from '../../components/HorseMarketplaceItem/HorseMarketplaceItem'
import HorseCard from '../../components/HorseCard/HorseCard';

function HorseMarketplace(props) {
    return (
        <div className='HorseMarketplace'>
            {props.horses.map(horse =>
                <HorseMarketplaceItem
                    horse={horse}
                    key={horse._id}
                />
                // <HorseCard
                //     horse={horse}

                //     key={horse._id}
                // />
            )}
        </div>
    )
}
export default HorseMarketplace;