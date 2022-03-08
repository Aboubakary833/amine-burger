import React from 'react';
import {Link} from 'react-router-dom'

const Unauthenticated = () => {
    return (
        <div className='unauthenticated mx-auto text-white rounded mt-4 py-2 text-center'>
            <h1 className="text-center text-popone text-suncolor">Vous n'êtes pas connecté</h1>
            <p className='mt-2'>Pour accéder à cette page vous dévriez avoir un compte.</p>
            <div className="mt-3">
                <Link to="/login" className='auth text-white rounded'>Se connecter</Link>
                <div className='my-1'>
                    <span>ou</span>
                </div>
                <Link to="/register" className='auth text-white rounded'>Créer un compte</Link>
            </div>
        </div>
    );
}

export default Unauthenticated;
