import React from 'react';
import Diapo from '../components/Diapo';
import testBurger from '../assets/images/burger.png'

const Home = () => {
    const test_product = {
        name: "Le burger classique",
        img: testBurger,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint at minus ipsa earum, corporis dolor exercitationem nesciunt distinctio ex, molestiae voluptas ratione ea accusantium blanditiis doloremque, quaerat eius sequi ab?"
    }
    return (
        <div className='mt-0 mt-md-4 mt-lg-0'>
            <Diapo product={test_product} />
        </div>
    );
}

export default Home;
