import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';

const Main = () => {
    return (
        <div className='container mt-1'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menus' element={<Menu />}/>
      </Routes>
        </div>
    );
}

export default Main;
