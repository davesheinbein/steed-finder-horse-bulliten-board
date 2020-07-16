import React from 'react';
import HorseMarketplaceItem from '../../components/HorseMarketplaceItem/HorseMarketplaceItem'
import './HorseMarketplacePage.css'

function HorseMarketplace(props) {
    return (
        <div className='HorseMarketplace'>
            {props.horses.map(horse =>
                <HorseMarketplaceItem
                    handleDeleteHorse={props.handleDeleteHorse}
                    horse={horse}
                    key={horse._id}
                />
            )}
        </div>
    )
}
export default HorseMarketplace;