import React from 'react';
import Comment from '../../components/Comment/Comment'
import AddComment from '../../components/AddComments/AddComments'
import styles from './CommentsList.module.css'

function CommentsList(props) {
     //console.log(props, '< props');
    return (
        <div className={styles.CommentsList}>
            <div className={styles.CommentsHeading}>Comments</div>
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