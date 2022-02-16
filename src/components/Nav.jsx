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
                    <NavLink to='/'>Acceuil</NavLink>
                    <NavLink to='/menus'>Menus</NavLink>
                    <NavLink to='/localisation'>Localisation</NavLink>
                </div>
            </div>
            <div className='lastfield'>
                <NavLink to='/account' className={`mx-1 ${({isActive}) => 'active'}`}>
                    <BiUser />
                </NavLink>
                <NavLink to='/account' className={`mx-1 ${({isActive}) => 'active'}`}>
                    <BsBag />
                </NavLink>
            </div>
        </div>
    );
}

export default Nav;
