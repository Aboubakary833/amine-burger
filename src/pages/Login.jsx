import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login card mx-auto mt-4'>
            <div className="card-header">
                <h1 className="text-center text-popone text-suncolor">Connexion</h1>    
            </div>
            <div className="card-body">
                <form action="#" method="post">
                    <div className="form-group mb-2">
                        <label htmlFor="email">Adresse email: </label>
                        <input type="email" name="email" id="email" className='form-control' placeholder='exemple@gmail.com' required />    
                    </div>    
                    <div className="form-group mb-2">
                        <label htmlFor="password">Mot de passe: </label>
                        <input type="password" name="password" id="password" className='form-control' placeholder='Entrez votre mot de passe' required />    
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className='text-white outline-0 border-0 rounded auth'>Se connecter</button>
                        <p className='mt-2'>
                            <Link to="/reset" className='small text-suncolor'>Mot de passe oublié</Link><br />
                            <Link to="/register" className='small text-suncolor'>Créer un nouveau compte</Link>    
                        </p>    
                    </div>
                </form>    
            </div>
        </div>
    );
}

export default Login;
