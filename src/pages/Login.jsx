import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { HOST } from '../env'
import { login } from '../store/reducers/userReducer';
import Alert from '../components/Alert'

const Login = () => {
    const email = useRef()
    const password = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isAlert, setIsAlert] = useState({ active: false, type: null, content: null })
    const alert = <Alert type={isAlert.type}>{isAlert.content}</Alert>

    return (
        <div className='login card mx-auto mt-4'>
            <div className="card-header">
                <h1 className="text-center text-popone text-suncolor">Connexion</h1>
            </div>
            {isAlert.active ? alert : null}
            <div className="card-body">
                <form action={`${HOST}/api/login`} method="post" onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group mb-2">
                        <label htmlFor="email">Adresse email: </label>
                        <input type="email" name="email" id="email" ref={email} className='form-control' placeholder='exemple@gmail.com' required />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="password">Mot de passe: </label>
                        <input type="password" name="password" id="password" ref={password} className='form-control' placeholder='Entrez votre mot de passe' required />
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

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = {
            email: email.current.value,
            password: password.current.value
        }

        e.target.reset()

        try {
            const { data } = await axios.post(e.target.action, formData)
            setIsAlert({
                active: true,
                type: 'success',
                content: "Votre connexion a réussi."
            })

            dispatch(login(data))
            localStorage.setItem('auth_user', btoa(JSON.stringify(data)))
            setTimeout(() => {
                navigate(-1)
            }, 1000);
            
        } catch (error) {
            const {data} = error.response
            setIsAlert({
                active: true,
                type: 'danger',
                content: data.error
            })
        }
    }
}

export default Login;
