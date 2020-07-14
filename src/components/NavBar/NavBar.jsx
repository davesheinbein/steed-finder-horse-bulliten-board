import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
  let nav = props.user ?
    <div className='NavBar-header'>
      <div className='NavBar-links'>
        <Link to='' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
      </div>
      <div>
        Steed Finder
      </div>
    </div>
    :
    <div className='NavBar-header'>
      <div className='NavBar-links'>
        <Link to='/login' className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
      </div>
      <div>
        Bojack Horseman
      </div>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;