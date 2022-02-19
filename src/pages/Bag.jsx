import React from 'react';
import testBurger from '../assets/images/burger.png'
import Block from '../components/Block';

const Bag = () => {
    const test_product = {
        name: "Le burger classique",
        img: testBurger,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint at minus ipsa earum, corporis dolor exercitationem nesciunt distinctio ex, molestiae voluptas ratione ea accusantium blanditiis doloremque, quaerat eius sequi ab?"
    }
    return (
        <div className='mt-2 mt-md-4'>
            <div className="row gap-2">

                <Block title="Mon panier" data={test_product} />

            </div>
        </div>
    );
}

export default Bag;
