import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link, Outlet } from 'react-router-dom';
import { authProvider } from '../Context/Context';

const Header = () => {
    const {user,singOutWithPassword,loading}=useContext(authProvider)
    // console.log(singOutWithPassword);
    console.log(user);
    // if(loading){
    //    return <progress className="progress w-56"></progress>
    // }
    const handleLogout =() =>{
        singOutWithPassword()
        .then((result)=>{
         
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link className={({ isActive }) => (isActive ? 'text-orange-200' : 'default')} to="/">Shop</Link>
                <Link to="/order">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/singUp">SingUp</Link>
                
              {
               user&& <span className="text-orange-50">{user.email}<button className="text-slate-950" onClick={handleLogout}>SingUp</button> </span>
               }
            </div>
        </nav>
    );
};

export default Header;