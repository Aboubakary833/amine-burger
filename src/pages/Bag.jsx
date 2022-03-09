import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import testBurger from '../assets/images/burger.png'
import Command from '../components/Command';
import Unauthenticated from '../components/UnAuthenticated';
import Loading from '../components/Loading';

const Bag = () => {

    const user = useSelector(store => store.user)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
            if(user) setTimeout(() => setIsLoading(false), 300);
            else setTimeout(() => setIsLoading(false), 150);
    }, [user])

    const test_product = {
        name: "Le burger classique",
        image: testBurger,
        price: 1000,
        amount: 2,
        created_at: "18/05/2022"
    }

    const content = (
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
                        <Link to="/commands_history" className='auth text-white rounded command_link'>Historique de mes commandes</Link>
                    </div>    
                </div>
            </div>
        </div>
    );

    return isLoading ? <Loading/> : (user ? content : <Unauthenticated />);
}

export default Bag;
