import React, { useState } from 'react';
import Stepsform from '../components/StepsForm';
import forms from './additionals/register_forms';

const Register = () => {
    const [activeFormIndex, setActiveFormIndex] = useState(0)
    const bullets = []
    for(let i = 0; i < forms.length; i++) bullets.push(i)

    return (
        <div className='login card mx-auto mt-4'>
            <div className="card-header">
                <h1 className="text-center text-popone text-suncolor">Inscription</h1>
            </div>
            <div className="card-body">
                <Stepsform step={activeFormIndex} setStep={setActiveFormIndex} />
            </div>

            <div className="card-footer">
                <div className="mx-auto bullets">
                    {bullets.map(index => {
                        return <div 
                        className={`rounded-circle ${index === activeFormIndex ? 'active_bullet' : null}`}
                        key={index}></div>
                    })}    
                </div>
            </div>
        </div>
    );
}

export default Register;
