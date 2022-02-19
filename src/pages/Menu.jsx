import React from 'react';
import testBurger from '../assets/images/burger.png'
import Card from '../components/Card';

const Menu = () => {
    const test_product = {
        name: "Le burger classique",
        img: testBurger,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint at minus ipsa earum, corporis dolor exercitationem nesciunt distinctio ex, molestiae voluptas ratione ea accusantium blanditiis doloremque, quaerat eius sequi ab?"
    }
    return (
        <div className='mt-4 mt-lg-3 mb-2'>
            <div className="row g-3">
                <Card product={test_product} />
            </div>
        </div>
    );
}

export default Menu;
