import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
import { HOST } from '../env';

const Emailconfirmation = () => {

    const [formData, setFormData] = useState({
        uuid: sessionStorage.getItem("user"),
        code: null
    })
    const navigate = useNavigate()
    const uuid = sessionStorage.getItem('user')
    const [isAlert, setIsAlert] = useState({ active: false, type: null, content: null })
    const alert = <Alert type={isAlert.type}>{isAlert.content}</Alert>

    if(!uuid) navigate(-1)

    return (
        <div className='login card mx-auto my-3'>
            <div className="card-header">
                <h1 className="text-center text-popone text-suncolor">Confirmation de l'adresse email</h1>
            </div>
            {isAlert.active ? alert : null}
            <div className="card-body">
                <form action={`${HOST}/api/confirm`} method="post" onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group mb-2">
                        <label htmlFor="code">Code de confirmation: </label>
                        <input type="number" name="code" id="code" className="form-control" placeholder='Entrez le code' required onChange={(e) => setFormData({...formData, code: e.target.value})} />
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

            setTimeout(() => {
                navigate('/password')
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

export default Emailconfirmation;
