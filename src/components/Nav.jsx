import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.png'
import { BiUser } from 'react-icons/bi'
import { BsBag } from 'react-icons/bs'
import {HiMenuAlt2} from 'react-icons/hi'

const Nav = () => {
    const [showNav, setShowNav] = useState(false)
    return (
        <div className='container mt-1 d-flex justify-content-between align-items-center'>
            <div className="logo_and_links w-75 d-flex align-items-center">
                <div className="logofield d-flex d-md-block">
                    <button className='border-0 outline-0 bg-none d-md-none' onClick={showOrHide}>
                        <HiMenuAlt2 />
                    </button>
                    <Link to='/'>
                        <img src={logo} alt="AmineBurger" />
                    </Link>
                </div>
                <div className={`linksfield ${showNav ? 'd-flex' : 'd-none d-md-flex'} flex-column flex-md-row justify-content-evenly align-items-center`}>
                    <NavLink to='/' className={({isActive}) => isActive ? 'active' : null}>Accueil</NavLink>
                    <NavLink to='/menus' className={({isActive}) => isActive ? 'active' : null}>Menus</NavLink>
                    <NavLink to='/about' className={({isActive}) => isActive ? 'active' : null}>À propos</NavLink>
                    <NavLink to='/contacts' className={({isActive}) => isActive ? 'active' : null}>Contacts</NavLink>
                </div>
            </div>
            <div className='lastfield d-flex justify-content-center align-items-center'>
                <Link to='/account' className="mx-1">
                    <BiUser />
                </Link>
                <Link to='/bag' className="mx-1">
                    <BsBag />
                </Link>
            </div>
        </div>
    );

    function showOrHide() {
        setShowNav(!showNav)
    }
}

export default Nav;
