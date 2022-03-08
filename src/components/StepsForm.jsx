import axios from 'axios';
import React, { useRef } from 'react';
import { HOST } from '../env';

const Stepsform = ({step, setStep}) => {

    const inputs = [
        {
            firstname: useRef(),
            lastname: useRef(),
        },
        {
            email: useRef(),
            confirm_email: useRef(),
        },
        {
            code: useRef(),
        },
        {
            phone: useRef(),
            confirm_phone: useRef(),
        },
        {
            password: useRef(),
            confirm_password: useRef()
        }
    ]

    const forms = [
        (<form action={`${HOST}/register`} method='POST' onSubmit={e => handleSubmit(e)}>
            <input type="hidden" name="step" value={1} required />
            <div className="form-group mb-2">
                <label htmlFor="firstname">Nom: </label>
                <input type="text" name="firstname" id="firstname" ref={inputs[0].firstname} className="form-control" placeholder='Entrez votre nom' required />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="lastname">Nom: </label>
                <input type="text" name="lastname" id="lastname" ref={inputs[0].lastname} className="form-control" placeholder='Entrez votre prénom' required />
            </div>
            <div className="form-group text-center">
                <button type="submit" className="text-white outline-0 border-0 rounded auth">Envoyer</button>    
            </div>
        </form>),


        (<form action={`${HOST}/register`} method='POST' onSubmit={e => handleSubmit(e)} className="register_form">
            <input type="hidden" name="step" value={2} required />
            <div className="form-group mb-2">
                <label htmlFor="email">Adresse email: </label>
                <input type="email" name="email" id="email" ref={inputs[1].email} className="form-control" placeholder='exemple@gmail.com' required />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="confirm_email">Confirmez l'adresse email: </label>
                <input type="text" name="confirm_email" id="confirm_email" ref={inputs[1].confirm_email} className="form-control" placeholder='exemple@gmail.com' required />
            </div>
            <div className="form-group text-center">
                <button type="submit" className="text-white outline-0 border-0 rounded auth">Envoyer</button>    
            </div>
        </form>),


        (<form action={`${HOST}/register`} method='POST' onSubmit={e => handleSubmit(e)} className="register_form">
            <input type="hidden" name="step" value={3} required />
            <div className="form-group mb-2">
                <label htmlFor="code">Entrez le code à six chiffres qui vous a été envoyé par mail: </label>
                <input type="number" name="code" id="code" className="form-control" ref={inputs[2].code} placeholder='XXXXXX' required />
            </div>
            <div className="form-group text-center">
                <button type="submit" className="text-white outline-0 border-0 rounded auth">Envoyer</button>    
            </div>
        </form>),
        (<form action={`${HOST}/register`} method='POST' onSubmit={e => handleSubmit(e)} className="register_form">
            <input type="hidden" name="step" value={4} required />
            <div className="form-group mb-2">
                <label htmlFor="phone">Numéro de téléphone: </label>
                <input type="tel" name="phone" id="phone" className="form-control" placeholder='+226XXXXXXXX' required />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="phone">Confirmation du numéro de téléphone: </label>
                <input type="tel" name="confirm_phone" id="confirm_phone" className="form-control" placeholder='+226XXXXXXXX' required />
            </div>
            <div className="form-group text-center">
                <button type="submit" className="text-white outline-0 border-0 rounded auth">Envoyer</button>    
            </div>
        </form>),


        (<form action={`${HOST}/register`} method='POST' onSubmit={e => handleSubmit(e)} className="register_form">
            <input type="hidden" name="step" value={5} required />
            <div className="form-group mb-2">
                <label htmlFor="password">Mot de passe: </label>
                <input type="password" name="password" id="password" className="form-control" placeholder='Entrez votre mot de passe' required />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="phone">Confirmation du mot de passe: </label>
                <input type="confirm_password" name="confirm_password" id="confirm_password" className="form-control" placeholder='Rentrez le mot de passe' required />
            </div>
            <div className="form-group text-center">
                <button type="submit" className="text-white outline-0 border-0 rounded auth">Envoyer</button>    
            </div>
        </form>),
        
    ]
    return forms[step]

    function handleSubmit(e) {
        e.preventDefault()
        const fields = inputs[step]
        const formData = {}
        Object.keys(fields).forEach(key => {
            const element = fields[key].current
            formData[element.name] = element.value
        })
        e.target.querySelector('button[type="submit"]').style.filter = "brightness(.5)"
        e.target.querySelector('button[type="submit"]').innerHTML = "En cours ..."

        //SENDS THE FORMDATA

        axios.post(e.target.action, formData)
        .then(res => {
            
        })

        if(step !== forms.length) setTimeout(_ => {
            e.target.querySelector('button[type="submit"]').style.filter = "brightness(1)"
            e.target.querySelector('button[type="submit"]').innerHTML = "Envoyer"
            e.target.classList.add('slide_out')
            setStep(++step)
        }, 300)
    }
}

export default Stepsform;
