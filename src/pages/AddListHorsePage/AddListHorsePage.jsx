import React, { Component } from 'react';
import styles from './AddListHorsePage.module.css'

class ListHorse extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      age: '',
      categories: 'Appaloosa',
      breed: '',
      price: '',
      location: '',
      contact: '',
      image: '',
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
    console.log(this.state.formData, 'this.state.formData');
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
                // pattern='/^[a-z ,-]+$/i'
                placeholder='ABC'
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Age: </label>
              <input
                className={styles.formControl}
                name="age"
                value={this.state.formData.age}
                // pattern='/^[1-9][0-9]?[0-9]?$/g'
                placeholder='###'
                onChange={this.handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Categories: </label>
              <select
                name="categories"
                className={styles.formControl}
                value={this.state.formData.categories}
                onChange={this.handleChange}
              >
                <option selected="selected" value="Appaloosa">Appaloosa</option>
                <option value="Arabian">Arabian</option>
                <option value="Belgian">Belgian</option>
                <option value="Clydesdale">Clydesdale</option>
                <option value="Connemara">Connemara</option>
              </select>
            </div>

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
                // pattern='/^[0-9]+(\.[0-9]{1,2})?$/g'
                placeholder='$$.$$'
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Location (required): </label>
              <input
                className={styles.formControl}
                name="location"
                value={this.state.formData.location}
                onChange={this.handleChange}
                placeholder='City, State'
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
                // pattern="/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g"
                placeholder='(###)###-####'
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Horse Image (URL): </label>
              <input
                className={styles.formControl}
                name="image"
                value={this.state.formData.image}
                // pattern='/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g'
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