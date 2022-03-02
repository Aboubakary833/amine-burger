import React from 'react';
import Diapo from '../components/Diapo';
import testBurger from '../assets/images/burger.png'
import { useSelector } from 'react-redux';

const Home = () => {
    const diapoData = useSelector((store) => store.productsReducer[0])
    console.log(diapoData);
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
