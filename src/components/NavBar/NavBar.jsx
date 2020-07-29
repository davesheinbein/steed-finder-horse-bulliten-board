import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
  let nav = props.user ?

    <div className='NavBar-header'>
      <div className="nav-wrapper">

        <ul id="nav-mobile" className="left align-row">
          <li><Link to='' onClick={props.handleLogout} className='NavBar-link'>Log Out</Link></li>
          <li>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
          <li><span className='NavBar-welcome'>Welcome, {props.user.name}</span></li>
        </ul>

        <div className="brand-logo center"><Link to='' className='NavBar-link mainLogoText'>Steed Finder</Link></div>

        <ul id="nav-mobile" className="right align-row">
          <li><Link to='/marketplace' className='NavBar-link'>Marketplace</Link></li>
          <li>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
          <li><Link to='/addlisthorse' className='NavBar-link'>List Horse</Link></li>
        </ul>

      </div>
    </div>
    :

    <div className='NavBar-header'>
      <div className="nav-wrapper">

        <ul id="nav-mobile" className="left align-row">
          <li><Link to='/login' className='NavBar-link'>Log In</Link></li>
          <li>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
          <li><Link to='/signup' className='NavBar-link'>Sign Up</Link></li>
        </ul>

        <div className="brand-logo center"><Link to='' className='NavBar-link mainLogoText'>Steed Finder</Link></div>

        <ul id="nav-mobile" className="right align-row">
          <li><Link to='/marketplace' className='NavBar-link'>Marketplace</Link></li>
          <li>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
          <li><Link to='/addlisthorse' className='NavBar-link'>List Horse</Link></li>
        </ul>

      </div>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;