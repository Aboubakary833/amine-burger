import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Unauthenticated from '../components/UnAuthenticated';
import { HOST } from '../env';
import Loading from '../components/Loading'
import Alert from '../components/Alert';
import axios from 'axios';

const Profile = () => {
    const user = useSelector(store => store.user)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
            if(user) setTimeout(() => setIsLoading(false), 1000);
            else setTimeout(() => setIsLoading(false), 2000);
    }, [user])

    const [firstname, setFirstname] = useState(user ? user.firstname : '')
    const [lastname, setLastname] = useState(user ? user.lastname : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [confirm_email, setConfirmEmail] = useState(user ? user.email : '')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')

    const formDatas = {
        identity: {
            firstname,
            lastname
        },
        email: {
            email,
            confirm_email
        },
        password: {
            password,
            confirm_password
        }
    }

    const [isAlert, setIsAlert] = useState({ active: false, type: null, content: null, for: null })
    const alert = <Alert type={isAlert.type}>{isAlert.content}</Alert>

    //markdowns

    const profile = (<div className='profile mt-2 mt-md-4'>
    <h1 className='text-center'>Mes informations</h1>
    <div className="row mt-4 justify-content-center align-items-center">
        <div className="col-8 col-lg-2">
            <img src={user ? `${HOST}/storage/${user.avatar}` : null} alt="avatar" className='avatar rounded-circle' />
        </div>
        <div className="col-8 col-lg-4">
            <h2 className='mt-2 text-popone text-suncolor text-center text-lg-start'>{user ? `${user.firstname} ${user.lastname}` : null}</h2>
            <p className="text-white">{user ? user.email : null}</p>
        </div>
        <div className='col-12 col-lg-6'>
            <form action={`${HOST}/api/update`} method="post" data-formdata="identity" onSubmit={(e) => handleSubmit(e)}>
                {isAlert.for === "identity" ? alert : null}
                <input type="hidden" name="type" value="IDENTITY" required />
                <div className="form-group">
                    <label htmlFor="lastname">Nom : </label>
                    <input type="text" name="lastname" id="lastname" className='mb-1 form-control' placeholder='Votre nom' value={lastname} required onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="firstname">Prénom : </label>
                    <input type="text" name="firstname" id="firstname" className='mb-1 form-control' placeholder='Votre prénom' value={firstname} required onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit" className='btn'>Modifier</button>
                </div>
            </form>
        </div>
    </div>
    <div className="row mt-4 mb-2 gap-2 gap-lg-0">
        <div className="col-12 col-lg-6">
            <form action={`${HOST}/api/update`} method="post" data-formdata="email" onSubmit={(e) => handleSubmit(e)}>
            {isAlert.for === "email" ? alert : null}
                <input type="hidden" name="type" value="EMAIL" required />
                <div className="form-group">
                    <label htmlFor="email">Adresse email : </label>
                    <input type="email" name="email" id="email" className='mb-1 form-control' placeholder='Votre adresse email' value={email} required onChange={(e) => setEmail(e.target.value)} contentEditable={true} />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm_email">Confirmation de l'adresse email : </label>
                    <input type="email" name="confirm_email" id="confirm_email" className='mb-1 form-control' placeholder='Votre adresse email' value={email} required onChange={(e) => setConfirmEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit" className='btn'>Modifier</button>
                </div>
            </form>
        </div>
        <div className="col-12 col-lg-6">
            <form action={`${HOST}/api/update`} method="post" data-formdata="password" onSubmit={(e) => handleSubmit(e)}>
            {isAlert.for === "password" ? alert : null}
                <input type="hidden" name="type" value="PASSWORD" required />
                <div className="form-group">
                    <label htmlFor="password">Nouveau mot de passe : </label>
                    <input type="password" name="password" id="password" className='mb-1 form-control' placeholder='Entrez votre nouveau mot de passe' required onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm_password">Confirmez votre nouveau de passe : </label>
                    <input type="password" name="confirm_password" id="confirm_password" className='mb-1 form-control' placeholder='Rerentrez votre nouveau mot de passe' required onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit" className='btn'>Modifier</button>
                </div>
            </form>
        </div>
    </div>
</div>)

    return isLoading ? <Loading/> : (user ? profile : <Unauthenticated />)

    async function handleSubmit(e) {
        const formData = formDatas[e.target.dataset.formdata]
        try {
            const {data} = axios.post(e.target.action, formData, {
                headers: {'Authorization': user.auth_token}
            })

            setIsAlert({
                active: true,
                type: 'success',
                content: data.success,
                for: e.target.dataset.formdata
            })

        } catch (error) {
            const {data} = error.response
            setIsAlert({
                active: true,
                type: 'danger',
                content: data.error,
                for: e.target.dataset.formdata
            })
        }
        e.target.reset()
    }
}

export default Profile;
