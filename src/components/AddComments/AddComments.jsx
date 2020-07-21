import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from './AddComments.module.css'
// import CommentService from '../../services/commentServices'


// import user from '../../../models/user';

class AddComment extends Component {
    state = {
        invalidForm: true,
        formData: {
            comment: ''
        }
    };

    formRef = React.createRef();

    handleSubmit = async e => {
        e.preventDefault();
        this.props.handleAddComment(this.props.horse._id, this.state.formData);
        this.setState({
            formData: {
                creator: '',
                comment: ''
            }
        })
    };



    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <>
                <div className={styles.formContainerAddHorse}>
                    <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>User: </label>
                            <div className={styles.username}>{this.props.user.name}</div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Comment: </label>
                            <textarea
                                className={styles.formControl}
                                name="comment"
                                value={this.state.formData.comment}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className={styles.btnActions}>
                            <button
                                type="submit"
                                className={styles.btn}
                                disabled={this.state.invalidForm}
                            >
                                Enter
                            </button>&nbsp;&nbsp;
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default AddComment;