import React, { Component } from 'react';
import HorseCard from '../../components/HorseCard/HorseCard';
import CommentsList from '../../components/CommentsList/CommentsList';
import styles from './HorseDetailsPage.module.css'



class HorseDetailPage extends Component {
    render() {
        // console.log(this.props, 'this.props');
        const horse = this.props.location.state.horse;
        const comment = this.props.location.state.horse.comment;
        // console.log(horse, '<hitting horse');

        return (
            <>
                <div className={styles.detailsTitle}>Horse Details</div>
                <div>
                    <HorseCard
                        handleDeleteHorse={this.props.handleDeleteHorse}
                        key={horse._id}
                        horse={horse}
                    />
                    <CommentsList
                        handleAddComment={this.props.handleAddComment}
                        handleDeleteComment={this.props.handleDeleteComment}
                        horse={horse} // need to be in here
                        comment={comment} // probably don't
                    />
                </div>
            </>
        );
    }
}

export default HorseDetailPage;
