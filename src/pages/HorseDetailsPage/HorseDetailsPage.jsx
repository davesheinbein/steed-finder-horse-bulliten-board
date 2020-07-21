import React, { Component } from 'react';
import HorseCard from '../../components/HorseCard/HorseCard';
import CommentsList from '../../components/CommentsList/CommentsList';
import styles from './HorseDetailsPage.module.css'



class HorseDetailPage extends Component {
    render() {
        const horse = this.props.location.state.horse;
        // console.log(horse, '<<<<< horse');

        return (
            <>
                <div className={styles.detailsTitle}>Horse Details</div>
                <div>
                    <HorseCard
                        handleDeleteHorse={this.props.handleDeleteHorse}
                        key={horse._id}
                        horse={horse}
                        user={this.props.user}
                        />
                    <CommentsList
                        handleAddComment={this.props.handleAddComment}
                        handleDeleteComment={this.props.handleDeleteComment}
                        horse={horse} // connected to the const horse above
                        user={this.props.user}
                    />
                </div>
            </>
        );
    }
}

export default HorseDetailPage;
