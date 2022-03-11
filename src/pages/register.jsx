import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
import { HOST } from '../env';

const Register = () => {

    const [formData, setFormData] = useState({
        firstname: null,
        lastname: null,
        email: null,
        confirm_email: null,
        phone: null,
        confirm_phone: null,
    })

    const [isAlert, setIsAlert] = useState({ active: false, type: null, content: null })
    const alert = <Alert type={isAlert.type}>{isAlert.content}</Alert>
    const navigate = useNavigate()

    return (
        <div className='login card mx-auto my-2'>
            <div className="card-header">
                <h1 className="text-center text-popone text-suncolor">Inscription</h1>
            </div>
            {isAlert.active ? alert : null}
            <div className="card-body">
            <form action={`${HOST}/api/register`} method='POST' onSubmit={e => handleSubmit(e)}>
            <div className="form-group mb-2">
                <label htmlFor="firstname">Prénom: </label>
                <input type="text" name="firstname" id="firstname" className="form-control" placeholder='Entrez votre prénom' required onChange={(e) => setFormData({...formData, firstname: e.target.value})} />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="lastname">Nom: </label>
                <input type="text" name="lastname" id="lastname" className="form-control" placeholder='Entrez votre nom' required onChange={(e) => setFormData({...formData, lastname: e.target.value})} />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="email">Adresse email: </label>
                <input type="email" name="email" id="email" className="form-control" placeholder='exemple@gmail.com' required onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="confirm_email">Confirmez l'adresse email: </label>
                <input type="text" name="confirm_email" id="confirm_email" className="form-control" placeholder='exemple@gmail.com' required onChange={(e) => setFormData({...formData, confirm_email: e.target.value})} />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="phone">Numéro de téléphone: </label>
                <input type="tel" name="phone" id="phone" className="form-control" placeholder='+226XXXXXXXX' required onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="phone">Confirmation du numéro de téléphone: </label>
                <input type="tel" name="confirm_phone" id="confirm_phone" className="form-control" placeholder='+226XXXXXXXX' required onChange={(e) => setFormData({...formData, confirm_phone: e.target.value})} />
            </div>
            <div className="form-group text-center">
                <button type="submit" className="text-white outline-0 border-0 rounded auth">Envoyer</button>    
            </div>
        </form>
            </div>
        </div>
    );

    async function handleSubmit(e) {
        e.preventDefault()
        e.target.reset()
        
        try {
            const {data} = await axios.post(e.target.action, formData)
            setIsAlert({
                active: true,
                type: 'success',
                content: data.success
            })

            sessionStorage.setItem('user', data.uuid)

            setTimeout(() => {
                navigate('/email_confirmation')
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

export default Register;
