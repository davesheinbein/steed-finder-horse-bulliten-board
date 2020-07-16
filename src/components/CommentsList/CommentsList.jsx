import React from 'react';
import Comments from '../../components/Comments/Comments'

function HorseMarketplace(props) {
    return (
        <div className='HorseMarketplace'>
            <h1>Comments</h1>
            <AddComment />
            {props.horses.comments.map(horse =>
                <Comments
                    handleDeleteComment={props.handleDeleteComment}
                    comment={horse.comments}
                    key={horse.comments._id}
                />
            )}
        </div>
    )
}
export default HorseMarketplace;