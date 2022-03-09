import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Burger from '../assets/images/burger.png'
import Loading from './Loading';

const Diapo = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(_ => {
        if(Burger) setTimeout(_ => setIsLoading(false), 300)
    })

    return isLoading ? <Loading /> : (
        <div className='row d-flex align-items-center'>
            <div className="col-12 col-md-6 diapo_product_image">
                <img src={Burger} alt="Burger classique" />
            </div>
            <div className='col-12 col-md-6 diapo_products_name_and_desc w-md-50 mb-2 mb-md-0 text-center text-lg-start'>
                <h1 className='mb-4'>Amine Burger!</h1>
                <p>À vous le choix entre les plus délicieux des burgers! Du burger classique, à l'épicé en passant par le burger au fromage et bien d'autres encore...</p>
                <div className="order_and_ingredients_btns mt-2">
                    <Link to="/menus" className='px-1'>Commencer les commandes</Link>
                </div>
            </div>
        </div>
    );
}

export default Diapo;
