import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../services/userServices';
import './SignupForm.css'

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    location: '',
    contactName: '',
    contactEmail: '',
    contactNumber: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div>
        <header className="header-footer">Sign Up</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Name (required)"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                placeholder="Email (required)"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="location"
                className="form-control"
                placeholder="Location (City, State)"
                value={this.state.location}
                name="email"
                onChange={this.handleChange} 
                />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="contactName"
                className="form-control"
                placeholder="Contact Name"
                value={this.state.contactName}
                name="email"
                onChange={this.handleChange} 
                />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="contactEmail"
                className="form-control"
                placeholder="Contact Email"
                value={this.state.contactEmail}
                name="email"
                onChange={this.handleChange} 
                />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="contactNumber"
                className="form-control"
                placeholder="Contact Number #"
                value={this.state.contactNumber}
                name="email"
                onChange={this.handleChange} 
                />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="password"
                className="form-control"
                placeholder="Password (required)"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password (required)"
                value={this.state.passwordConf}
                name="passwordConf"
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button
                className="btn btn-default"
                disabled={this.isFormInvalid()}>
                Sign Up
              </button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
