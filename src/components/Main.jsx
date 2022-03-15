import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Bag from '../pages/Bag';
import Changepassword from '../pages/ChangePassword';
import Contact from '../pages/Contact';
import Emailconfirmation from '../pages/EmailConfirmation';
import History from '../pages/History';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Newpassword from '../pages/NewPassword';
import Password from '../pages/Password';
import Profile from '../pages/Profile';
import Register from '../pages/register';
import Rejected from '../pages/Rejected';
import Resetcode from '../pages/ResetCode';

const Main = () => {
    return (
        <div className='container mt-1'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menus' element={<Menu />}/>
                <Route path='/about' element={<About />} />
                <Route  path='/contacts' element={<Contact />} />
                <Route  path='/account' element={<Profile />} />
                <Route  path='/bag' element={<Bag />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/rejected_commands' element={<Rejected />} />
                <Route path='/commands_history' element={<History />} />
                <Route path='/email_confirmation' element={<Emailconfirmation />} />
                <Route path='/password' element={<Password />} />
                <Route path='/reset_password' element={<Changepassword />} />
                <Route path='/reset_code' element={<Resetcode />} />
                <Route path='/new_password' element={<Newpassword />} />
            </Routes>
        </div>
    );
}

export default Main;
