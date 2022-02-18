import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Menu from '../pages/Menu';

const Main = () => {
    return (
        <div className='container mt-1'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menus' element={<Menu />}/>
            <Route path='/about' element={<About />} />
            <Route  path='/contacts' element={<Contact />} />
      </Routes>
        </div>
    );
}

export default Main;
