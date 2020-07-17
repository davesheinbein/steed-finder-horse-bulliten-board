import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './EditHorsePage.module.css'

class EditHorsePage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.horse
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateHorse(this.state.formData);
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
                <div className={styles.headerFooter}>Edit Horse</div>
                <div className={styles.formContainer}>
                    <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Name (required): </label>
                            <input
                                className={styles.formController}
                                name="name"
                                value={this.state.formData.name}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Age: </label>
                            <input
                                className={styles.formController}
                                name="age"
                                value={this.state.formData.age}
                                onChange={this.handleChange}
                            />
                        </div>

                        {/* <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Categories: </label>
                            <input
                            className={styles.formController}
                            name="catergories"
                            value={this.state.formData.catergories}
                            onChange={this.handleChange}
                            />
                        </div> */}

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Breed (required): </label>
                            <input
                                className={styles.formController}
                                name="breed"
                                value={this.state.formData.breed}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>$ Price (required): </label>
                            <input
                                className={styles.formController}
                                name="price"
                                value={this.state.formData.price}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Location (City, State) (required): </label>
                            <input
                                className={styles.formController}
                                name="location"
                                value={this.state.formData.location}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Contact Number # (required): </label>
                            <input
                                className={styles.formController}
                                name="contact"
                                value={this.state.formData.contact}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        {/* <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Horse's Image link (required): </label>
                            <input
                            className={styles.formController}
                            name="image"
                            value={this.state.formData.image}
                            onChange={this.handleChange}
                            required
                            />
                        </div> */}

                        <div className={styles.btnActions}>
                            <button
                                type="submit"
                                className={styles.btn}
                                disabled={this.state.invalidForm}
                            >
                                Save Horse
                        </button>&nbsp;&nbsp;
                            <Link
                                to='/'
                                className={styles.btnCancel}
                            >
                                CANCEL
                            </Link>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default EditHorsePage;