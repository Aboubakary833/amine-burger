import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.png'
import { BiUser } from 'react-icons/bi'
import { BsBag } from 'react-icons/bs'

const Nav = () => {
    return (
        <div className='container mt-1 d-flex justify-content-between align-items-center'>
            <div className="logo_and_links w-75 d-flex align-items-center">
                <div className="logofield">
                    <Link to='/'>
                        <img src={logo} alt="AmineBurger" />
                    </Link>
                </div>
                <div className="linksfield d-none d-md-flex justify-content-evenly align-items-center">
                    <NavLink to='/' className={({isActive}) => isActive ? 'active' : null}>Acceuil</NavLink>
                    <NavLink to='/menus' className={({isActive}) => isActive ? 'active' : null}>Menus</NavLink>
                    <NavLink to='/about' className={({isActive}) => isActive ? 'active' : null}>À propos</NavLink>
                    <NavLink to='/contacts' className={({isActive}) => isActive ? 'active' : null}>Contacts</NavLink>
                </div>
            </div>
            <div className='lastfield'>
                <Link to='/account' className="mx-1">
                    <BiUser />
                </Link>
                <Link to='/account' className="mx-1">
                    <BsBag />
                </Link>
            </div>
        </div>
    );
}

export default Nav;
