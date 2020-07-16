import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddComment extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.horse.comments
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddComment(this.state.formData);
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
                <h1>Comment</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Creator: </label>
                        <div>{horse.comments.createdby}</div>  {/* want to the username of the person who comments here */}
                    </div>

                    <div className="form-group">
                        <label>Comment: </label>
                        <input
                            className="form-control"
                            name="catergories"
                            value={this.state.formData.catergories}
                            onChange={this.handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn"
                        disabled={this.state.invalidForm}
                    >
                        Enter
                    </button>&nbsp;&nbsp;
                    <Link to='/'>CANCEL</Link>
                </form>
            </>
        );
    }
}

export default AddComment;