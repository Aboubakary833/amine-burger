import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '../assets/images/default_avatar.png'
import Unauthenticated from '../components/UnAuthenticated';

const Profile = () => {
    const user = useSelector(store => store.user)
    const profile = (<div className='profile mt-2 mt-md-4'>
    <h1 className='text-center'>Mes informations</h1>
    <div className="row mt-4 justify-content-center align-items-center">
        <div className="col-8 col-lg-2">
            <img src={Avatar} alt="avatar" className='avatar rounded-circle' />
        </div>
        <div className="col-8 col-lg-4">
            <h2 className='mt-2 text-popone text-suncolor text-center text-lg-start'>John Doe</h2>
            <p className="text-popone text-white text-center text-lg-start">johndoe@gmail.com</p>
        </div>
        <div className='col-12 col-lg-6'>
            <form action="#" method="post">
                <div className="form-group">
                    <label htmlFor="lastname">Nom : </label>
                    <input type="text" name="lastname" id="lastname" className='mb-1 form-control' placeholder='Votre nom' value="Doe" required />
                </div>
                <div className="form-group">
                    <label htmlFor="firstname">Prénom : </label>
                    <input type="text" name="firstname" id="firstname" className='mb-1 form-control' placeholder='Votre prénom' value="John" required />
                </div>
                <div className="form-group">
                    <button type="submit" className='btn'>Modifier</button>
                </div>
            </form>
        </div>
    </div>
    <div className="row mt-4 mb-2 gap-2 gap-lg-0">
        <div className="col-12 col-lg-6">
            <form action="#" method="post">
                <div className="form-group">
                    <label htmlFor="email">Adresse email : </label>
                    <input type="email" name="email" id="email" className='mb-1 form-control' placeholder='Votre adresse email' value="johndoe@gmail.com" required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm_email">Confirmation de l'adresse email : </label>
                    <input type="email" name="confirm_email" id="confirm_email" className='mb-1 form-control' placeholder='Votre adresse email' value="johndoe@gmail.com" required />
                </div>
                <div className="form-group">
                    <button type="submit" className='btn'>Modifier</button>
                </div>
            </form>
        </div>
        <div className="col-12 col-lg-6">
            <form action="#" method="post">
                <div className="form-group">
                    <label htmlFor="password">Nouveau mot de passe : </label>
                    <input type="password" name="password" id="password" className='mb-1 form-control' placeholder='Entrez votre nouveau mot de passe' required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm_password">Confirmez votre nouveau de passe : </label>
                    <input type="password" name="confirm_password" id="confirm_password" className='mb-1 form-control' placeholder='Rerentrez votre nouveau mot de passe' required />
                </div>
                <div className="form-group">
                    <button type="submit" className='btn'>Modifier</button>
                </div>
            </form>
        </div>
    </div>
</div>)

    return user ? profile : <Unauthenticated />
}

export default Profile;
