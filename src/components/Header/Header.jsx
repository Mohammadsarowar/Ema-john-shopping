import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link className={({ isActive }) => (isActive ? 'text-orange-200' : 'default')} to="/">Shop</Link>
                <Link to="/order">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
              
            </div>
        </nav>
    );
};

export default Header;