import React from 'react';
import testBurger from '../assets/images/burger.png'
import Block from '../components/Block';

const Bag = () => {
    const test_product = {
        name: "Le burger classique",
        img: testBurger,
        amount: "2",
        created_at: "18/05/2022"
    }
    return (
        <div className='mt-2 mt-md-4'>
            <div className="container">
                <div className="row">
                    <Block title="Mon panier" data={test_product} isBag={true} />
                    <Block title="Commandes en cours" data={test_product} isCommand={true} />
                </div>
                <div className="row my-2">
                    <Block title="Commandes non aboutis" data={test_product} isCommand={true} />
                    <Block title="Historique des commandes" data={test_product} isCommand={true} />
                </div>
            </div>
        </div>
    );
}

export default Bag;
