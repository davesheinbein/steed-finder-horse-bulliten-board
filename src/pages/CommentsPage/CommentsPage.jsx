import React from 'react';
import Comments from '../../components/Comments/Comments'

function HorseMarketplace(props) {
    return (
        <div className='HorseMarketplace'>
            {props.horses.map(horse =>
                <Comments
                    handleDeleteHorse={props.handleDeleteHorse}
                    horse={horse}
                    key={horse._id}
                />
            )}
        </div>
    )
}
export default HorseMarketplace;