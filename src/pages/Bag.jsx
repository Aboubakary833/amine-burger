import React from 'react';
import { Link } from 'react-router-dom';
import testBurger from '../assets/images/burger.png'
import Command from '../components/Command';

const Bag = () => {
    const test_product = {
        name: "Le burger classique",
        image: testBurger,
        price: 1000,
        amount: 2,
        created_at: "18/05/2022"
    }
    return (
        <div className='mt-2 mt-md-4'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <h2 className='text-popone text-suncolor'>Mon panier</h2>
                        <div className="row mt-2 command_list">
                               <Command product={test_product} />
                               <Command product={test_product} />
                               <Command product={test_product} />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-2 mt-md-0">
                        <h2 className='text-popone text-suncolor'>Commande en cours</h2>
                        <div className="row mt-2 command_list">
                               <Command product={test_product} />
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-12 col-md-6 text-center">
                        <Link to="/rejected_commands" className='auth text-white rounded command_link'>Commandes réjétées</Link>
                    </div>    
                    <div className="col-12 col-md-6 mt-2 mt-md-0 text-center">
                        <Link to="/rejected_commands" className='auth text-white rounded command_link'>Historique de mes commandes</Link>
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default Bag;
