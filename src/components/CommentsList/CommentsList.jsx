import React from 'react';
import Comment from '../../components/Comment/Comment'
import AddComment from '../AddComments/AddComments'

function CommentsList(props) {
    // console.log(props, '< props');
    return (
        <div className='CommentsList'>
            <h1>Comments</h1>
            <AddComment
                horse={props.horse}
            />
            {
                props.comments.map(comment => {
                    return <
                        Comment
                        comment={comment}
                        handleDeleteComment={props.handleDeleteComment}
                    />
                })
            }
        </div>
    )
}
export default CommentsList;