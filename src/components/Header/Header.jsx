import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
        <img src={logo} alt="" />
        <div>
            <a href="/order">order</a>
            <a href="/order Review">order Review</a>
            <a href="/Management Inventory">Management Inventory</a>
            <a href="/Login">Login</a>
        </div>

        </nav>
    );
};

export default Header;