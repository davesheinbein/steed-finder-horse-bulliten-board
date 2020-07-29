import React from 'react';
import HorseMarketplaceItem from '../../components/HorseMarketplaceItem/HorseMarketplaceItem'
import './HorseMarketplacePage.css'
import horseJumping from './Horse-Jumping-Silhouette.png'
import { Link } from 'react-router-dom';

function HorseMarketplace(props) {
    let marketplace = props.user ?
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
        :
        <div className='loginMessage'>
            <img src={horseJumping} alt="HorseJumping" className='HorseJumpingImg' />
            <Link to='/login' className='NavBar-link loginMessageText'>Login to view more!</Link>
        </div >

    return (
        <div>
            {marketplace}
        </div>
    )
}
export default HorseMarketplace;