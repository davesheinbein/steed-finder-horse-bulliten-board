import React, { Component } from 'react';
import HorseCard from '../../components/HorseCard/HorseCard';
import CommentsList from '../../components/CommentsList/CommentsList';
import styles from './HorseDetailsPage.module.css'
import commentServices from '../../services/commentServices'


class HorseDetailPage extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        };
    }

    handleDeleteComment = async id => {
        // console.log('hitting handle delete');
        await commentServices.delete(id);
        const newComments = this.state.comments.filter(comment => {
            return comment._id !==id
        })
        console.log(newComments, 'New Comment');
        
        this.setState( (state) => ({
            comment: newComments
        }))
      }
      // Need to Fix handleDeleteComment

    componentDidMount() {
        console.log('< components mounted');

        this.setState({
            comments: this.props.location.state.horse.comments
        });
        // console.log(this.state);
    }

    render() {
        const horse = this.props.location.state.horse;
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
                        handleDeleteComment={this.handleDeleteComment}
                        comments={this.state.comments}
                        horse={horse}
                    />
                </div>
            </>
        );
    }
}

export default HorseDetailPage;