import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
  let nav = props.user ?
    <div className='NavBar-header'>
      <div className='NavBar-links'>
        <Link to='' onClick={props.handleLogout} className='NavBar-link'>Log Out</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
      </div>
      <div className='mainLogoText mainLogoTextHide'>
        <Link to='' className='NavBar-link mainLogoText'>Steed Finder</Link>
      </div>
      <div>
        <Link to='/marketplace' className='NavBar-link'>Marketplace</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/addlisthorse' className='NavBar-link'>List Horse</Link>
      </div>
    </div>
    :

    <div className='NavBar-header'>

      <div className="nav-wrapper">
        <ul id="nav-mobile" className="left hide-on-med-and-down align-row">
          <li><Link to='/login' className='NavBar-link'>Log In</Link></li>
          <li>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
          <li><Link to='/signup' className='NavBar-link'>Sign Up</Link></li>
        </ul>

        <a href="#" className="brand-logo center"><Link to='' className='NavBar-link mainLogoText'>Steed Finder</Link></a>

        <ul id="nav-mobile" className="right hide-on-med-and-down align-row">
          <li><Link to='/marketplace' className='NavBar-link'>Marketplace</Link></li>
          <li>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
          <li><Link to='/addlisthorse' className='NavBar-link'>List Horse</Link></li>
        </ul>
      </div>

      {/* <div className='NavBar-links'>
        <Link to='/login' className='NavBar-link'>Log In</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>Sign Up</Link>
      </div>
      <div className='mainLogoText'>
        <Link to='' className='NavBar-link mainLogoText'>Steed Finder</Link>
      </div>
      <div>
        <Link to='/marketplace' className='NavBar-link'>Marketplace</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/addlisthorse' className='NavBar-link'>List Horse</Link>
      </div> */}
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;