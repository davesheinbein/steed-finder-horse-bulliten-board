import React from 'react';
import HorseMarketplaceItem from '../../components/HorseMarketplaceItem/HorseMarketplaceItem'
import './HorseMarketplacePage.css'

function HorseMarketplace(props) {
    return (
        <div>
            <div className='header'>Marketplace</div>
            <div className='HorseMarketplace'>
                {props.horses.map(horse =>
                    <HorseMarketplaceItem
                        handleDeleteHorse={props.handleDeleteHorse}
                        horse={horse}
                        key={horse._id}
                        user={props.user}
                    />
                )}
            </div>
        </div>
    )
}
export default HorseMarketplace;