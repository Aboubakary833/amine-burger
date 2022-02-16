import React from 'react';
import { Link } from 'react-router-dom';

const Diapo = ({ product }) => {
    return (
        <div className='row d-flex align-items-center'>
            <div className="col-12 col-md-6 diapo_product_image">
                <img src={product.img} alt={product.name} />
            </div>
            <div className='col-12 col-md-6 diapo_products_name_and_desc w-md-50 mb-2 mb-md-0'>
                <h1 className='mb-2'>{product.name}</h1>
                <p>{product.description}</p>
                <div className="order_and_ingredients_btns mt-2">
                    <Link to="#"className='px-1'>Commander</Link>
                    <Link to="#" className='px-1'>Voir les ingrédients</Link>
                </div>
            </div>
        </div>
    );
}

export default Diapo;
