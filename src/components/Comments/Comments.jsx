import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InputComment extends Component {
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
                        <label>Createdby (required): </label>
                        <input
                            className="form-control"
                            name="createdby"
                            value={this.state.formData.createdby}
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Rating: </label>
                        <input
                            className="form-control"
                            name="rating"
                            value={this.state.formData.rating}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Content: </label>
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
                        Save Horse
                </button>&nbsp;&nbsp;
                <Link to='/'>CANCEL</Link>
                </form>
            </>
        );
    }
}

export default InputComment;