import React from 'react';
import Comment from '../../components/Comment/Comment'
import AddComment from '../../components/AddComments/AddComments'

function CommentsList(props) {
    // console.log(props, '< props');
    return (
        <div className='CommentsList'>
            <h1>Comments</h1>
            <AddComment
                horse={props.horse}
                handleAddComment={props.handleAddComment}
                key={props.horse._id}
            />
            {
                props.horse.comments.map(comment => {
                    return <Comment
                        comment={comment}
                        handleDeleteComment={props.handleDeleteComment}
                        key={comment._id}
                    />
                })
            }
        </div>
    )
}
export default CommentsList;