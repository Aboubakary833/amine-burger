import React from 'react';

const Contact = () => {
    return (
        <div className='contact container mt-4'>
            <h1 className='text-center'>Nous contacter</h1>
            <div className="mt-2">
                <form action="#" className='col-12 col-md-8 mx-auto'>
                    <div className="form-group">
                        <label htmlFor="lastname">Nom : </label>
                        <input type="text" name="lastname" id="lastname" className='form-control mb-1' placeholder='Entrez votre nom' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstname">Prénom : </label>
                        <input type="text" name="firstname" id="firstname" className='form-control mb-1' placeholder='Entrez votre prénom' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Adresse e-mail : </label>
                        <input type="text" name="email" id="email" className='form-control mb-1' placeholder='Ex: exemple@gmail.com' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message : </label>
                        <textarea name="message" id="message" className='form-control mb-1' cols="30" rows="10" placeholder='Entrez votre message ...'></textarea>
                    </div>
                    <div className="form-group mb-1">
                        <button type="submit" className='btn'>Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
