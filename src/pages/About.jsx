import React from 'react';

const About = () => {

    return (
        <div className='mt-0 mt-md-4'>
            <div className="about container mt-4 mt-md-0">
                <h1 className='text-center'>À propos de nous</h1>
                <div className='mt-3 content'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, officia culpa modi aliquid alias enim! Totam, ullam repellendus? Eos repudiandae libero unde quaerat quam. Totam tempora minima itaque debitis dicta!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et velit inventore, iusto quaerat minima facere ratione deleniti itaque atque minus eaque fugiat at! Maiores quia nam minus dolorum hic!</p>
                    <div className='mt-3'>
                        <h1 className='text-center'>Localisation</h1>
                        <div className="mt-3 col-10 col-md-8 mx-auto">
                            <div className="gmap_canvas">
                                <iframe title='Map du restaurant Amine' id="gmap_canvas" src="https://maps.google.com/maps?q=Centre-ville&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0}></iframe>
                            </div>
                        </div>
                    </div>
                    <p className="mt-3 text-center">&copy;Copyright-AmineBurger-2022</p>
                </div>
                
            </div>
        </div>
    );
}

export default About;
