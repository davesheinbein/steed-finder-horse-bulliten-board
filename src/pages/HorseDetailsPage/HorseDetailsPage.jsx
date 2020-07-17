import React, { Component } from 'react';
import HorseCard from '../../components/HorseCard/HorseCard';
import CommentsList from '../../components/CommentsList/CommentsList';
import styles from './HorseDetailsPage.module.css'



class HorseDetailPage extends Component {
    horse = this.props.location.state.horse;
    render() {
        // console.log(horse, '<hitting horse');
        return (
            <>
                <div className={styles.detailsTitle}>Horse Details</div>
                <div>
                    <HorseCard
                        handleDeleteHorse={this.props.handleDeleteHorse}
                        key={this.horse._id}
                        horse={this.horse}
                        />
                    <CommentsList
                        handleAddComment={this.props.handleAddComment}
                        handleDeleteComment={this.props.handleDeleteComment}
                        key={this.horse._id}
                        horse={this.horse}
                    />
                </div>
            </>
        );
    }
}

export default HorseDetailPage;