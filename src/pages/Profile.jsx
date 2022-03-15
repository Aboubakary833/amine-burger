import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import Unauthenticated from '../components/UnAuthenticated';
import { HOST } from '../env';

const Profile = () => {
    const user = useSelector(store => store.user)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
            if(user) setTimeout(() => setIsLoading(false), 1000);
            else setTimeout(() => setIsLoading(false), 2000);
    }, [user])

    const profile = (<div className='profile mt-2 mt-md-4'>
    <h1 className='text-center'>Mes informations</h1>
    <div className="row mt-4 justify-content-center align-items-center">
        <div className="col-12 col-lg-8 text-center">
            <img src={user ? `${HOST}/storage/${user.avatar}` : null} alt="avatar" className='avatar rounded-circle' />
        </div>
        <div className="col-12 col-lg-8 text-center">
            <h2 className='mt-2 text-popone text-suncolor text-center'>{user ? `${user.firstname} ${user.lastname}` : null}</h2>
            <p className="text-white">{user ? user.email : null}</p>
        </div>
    </div>
    <div className="text-center my-1">
    <Link to="/reset_password" className='auth text-white rounded'>Changer de mot de passe</Link>
    </div>
</div>)

    return isLoading ? <Loading/> : (user ? profile : <Unauthenticated />)

    
}

export default Profile;
