import React, { Component } from 'react';
import styles from './AddListHorsePage.module.css'

class ListHorse extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      age: '',
      //   catergories: '',
      breed: '',
      price: '',
      location: '',
      contact: '',
      //   image: '',
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddHorse(this.state.formData);
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
        <div className={styles.headerFooter}>Add Horse</div>
        <div className={styles.container}>
          <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>

            <div className={styles.formGroup}>
              <label>Name (required): </label>
              <input
                className={styles.formControl}
                name="name"
                value={this.state.formData.name}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Age: </label>
              <input
                className={styles.formControl}
                name="age"
                value={this.state.formData.age}
                onChange={this.handleChange}
              />
            </div>

            {/* <div className={styles.formGroup}>
            <label>Categories: </label>
            <input
              className={styles.formControl}
              name="catergories"
              value={this.state.formData.catergories}
              onChange={this.handleChange}
            />
          </div> */}

            <div className={styles.formGroup}>
              <label>Breed (required): </label>
              <input
                className={styles.formControl}
                name="breed"
                value={this.state.formData.breed}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>$ Price (required): </label>
              <input
                className={styles.formControl}
                name="price"
                value={this.state.formData.price}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Location (City, State) (required): </label>
              <input
                className={styles.formControl}
                name="location"
                value={this.state.formData.location}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Contact Number # (required): </label>
              <input
                className={styles.formControl}
                name="contact"
                value={this.state.formData.contact}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
            <label>Horse's Image link (required): </label>
            <input
              className={styles.formControl}
              name="image"
              value={this.state.formData.image}
              onChange={this.handleChange}
            />
          </div>

            <button
              type="submit"
              className={styles.btn}
              disabled={this.state.invalidForm}
            >
              Add+ Horse
          </button>
          </form>
        </div>
      </>
    );
  }
}

export default ListHorse;