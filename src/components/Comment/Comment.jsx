import React from 'react';
import { Link } from 'react-router-dom';


function Comment({ horse }) {
    return (
        <div className='Heading'>
            <div className='panel'>
                <div className='panelHeading'>
                    <h3 className='panelTitle'>Comment</h3>
                </div>
                <div className='panelBody'>
                    <dl>
                        <dt>Name: </dt>
                        <dd>{horse.comments.createdby}</dd>
                        <dt>Comment: </dt>
                        <dd>{horse.comments.content}</dd>
                    </dl>
                </div>
                <div className={styles.panelFooter}>
                    <Link to='/marketplace'>RETURN TO LIST</Link>
                </div>
            </div>
        </div>
    )
}
export default Comment;