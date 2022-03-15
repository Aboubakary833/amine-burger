import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
import { HOST } from '../env';

const Newpassword = () => {
    
    const [formData, setFormData] = useState({
        password: null,
        confirm_password: null
    })

    const [isAlert, setIsAlert] = useState({ active: false, type: null, content: null })
    const alert = <Alert type={isAlert.type}>{isAlert.content}</Alert>

    const navigate = useNavigate()
    const uuid = sessionStorage.getItem('user')
    if(!uuid) navigate(-1)

    return (
        <div className='login card mx-auto my-3'>
            <div className="card-header">
                <h1 className="text-center text-popone text-suncolor">Entrez votre nouveau mot de passe</h1>
            </div>
            {isAlert.active ? alert : null}
            <div className="card-body">
                <form action={`${HOST}/api/password`} method="post" onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group mb-2">
                        <label htmlFor="password">Mot de passe: </label>
                        <input type="password" name="password" id="password" className="form-control" placeholder='Entrez votre mot de passe' required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="phone">Confirmation du mot de passe: </label>
                        <input type="password" name="confirm_password" id="confirm_password" className="form-control" placeholder='Rentrez le mot de passe' required onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })} />
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
        formData['uuid'] = uuid
        try {
            const {data} = await axios.post(e.target.action, formData)
            setIsAlert({
                active: true,
                type: 'success',
                content: data.success
            })

            setTimeout(() => {
                navigate('/home')
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

export default Newpassword;
