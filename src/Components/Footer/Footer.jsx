import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <nav className='nav-footer'>
        <Link to=''>About</Link>
        <Link to=''>Home</Link>
        <Link to=''>Contact</Link>
        <Link to=''>Legal Warning</Link>
      </nav>
    </div>
  );
}

export default Footer;