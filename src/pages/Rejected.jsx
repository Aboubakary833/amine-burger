import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import testBurger from '../assets/images/burger.png'
import Command from '../components/Command';
import Loading from '../components/Loading';
import Unauthenticated from '../components/UnAuthenticated';

const Rejected = () => {

    const user = useSelector(store => store.user)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
            if(user) setTimeout(() => setIsLoading(false), 300);
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
            <h2 className='text-popone text-suncolor'>Mes commandes réjétées</h2>
                <div className="row">
                    <div className="col-12 col-lg-6 command_list mt-1">
                        <Command product={test_product} />    
                    </div>
                    <div className="col-12 col-lg-6 command_list mt-1">
                        <Command product={test_product} />    
                    </div>
                    <div className="col-12 col-lg-6 command_list mt-1">
                        <Command product={test_product} />    
                    </div>
                </div>
            </div>
        </div>
    );
    return isLoading ? <Loading/> : (user ? content : <Unauthenticated />);
}

export default Rejected;
