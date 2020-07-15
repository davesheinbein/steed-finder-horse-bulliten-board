import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EditHorsePage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.horse
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddHorse(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h1>Edit Horse</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label>Name (required): </label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Age: </label>
            <input
              className="form-control"
              name="age"
              value={this.state.formData.age}
              onChange={this.handleChange}
            />
          </div>

          {/* <div className="form-group">
            <label>Categories: </label>
            <input
              className="form-control"
              name="catergories"
              value={this.state.formData.catergories}
              onChange={this.handleChange}
            />
          </div> */}

          <div className="form-group">
            <label>Breed (required): </label>
            <input
              className="form-control"
              name="breed"
              value={this.state.formData.breed}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>$ Price (required): </label>
            <input
              className="form-control"
              name="price"
              value={this.state.formData.price}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Location (City, State) (required): </label>
            <input
              className="form-control"
              name="location"
              value={this.state.formData.location}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Contact Number # (required): </label>
            <input
              className="form-control"
              name="contact"
              value={this.state.formData.contact}
              onChange={this.handleChange}
              required
            />
          </div>

          {/* <div className="form-group">
            <label>Horse's Image link (required): </label>
            <input
              className="form-control"
              name="image"
              value={this.state.formData.image}
              onChange={this.handleChange}
              required
            />
          </div> */}

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

export default EditHorsePage;