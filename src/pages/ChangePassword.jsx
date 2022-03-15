import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
import { HOST } from '../env';

const Changepassword = () => {
    const [formData, setFormData] = useState({email: ''})
    const navigate = useNavigate()
    const [isAlert, setIsAlert] = useState({ active: false, type: null, content: null })
    const alert = <Alert type={isAlert.type}>{isAlert.content}</Alert>
    return (
        <div className='login card mx-auto my-3'>
            <div className="card-header">
                <h1 className="text-center text-popone text-suncolor">Modification de mot de passe</h1>
            </div>
            {isAlert.active ? alert : null}
            <div className="card-body">
                <form action={`${HOST}/api/reset_password`} method="post" onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group mb-2">
                        <label htmlFor="email">Entrez votre adresse email: </label>
                        <input type="email" name="email" id="email" className="form-control" placeholder='exemple@gmail.com' required onChange={(e) => setFormData({email: e.target.value})} />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="text-white outline-0 border-0 rounded auth">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    );

    async function handleSubmit(e) {
        try {
            const {data} = await axios.post(e.target.action, formData)
            setIsAlert({
                active: true,
                type: 'success',
                content: data.success
            })
            navigate('/reset_code');
        } catch (error) {
            const {data} = error.response
            setIsAlert({
                active: true,
                type: 'danger',
                content: data.success
            })
        }

        e.target.reset()
    }
}

export default Changepassword;
