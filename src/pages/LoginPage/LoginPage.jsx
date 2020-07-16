import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../services/userServices';

class LoginPage extends Component {

  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    // TODO: implement in an elegant way
    this.setState({
      // use Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div className="LoginPage">
        <header className="header-footer">Log In</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <label className='form-label'>Email (required): </label>
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label className='form-label'>Password (required): </label>
              <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center form-group-btns">
              <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/' className="cancelLink">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
