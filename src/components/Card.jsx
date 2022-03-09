import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi'
import { HOST } from '../env';

const Card = ({ product }) => {

    const [needNumber, setNeedNumber] = useState(1)
    
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className='card border-0'>
                <div className="card_img d-flex justify-content-center align-items-center">
                    <img src={`${HOST}/storage/${product.image}`} alt={product.name} />
                </div>
                <div className="card_ordering d-flex flex-column align-items-center">
                    <h5 className='my-1'>{product.name}</h5>
                    <p className="desc p-1 text-center">{product.description}</p>
                    <div className="ordering w-100 mb-1 d-flex justify-content-around align-items-center">
                        <div className="inc_dec_btns">
                            <button className='border-0 outline-0 rounded-start fw-bold text-white' onClick={decrement}>
                                <span> - </span>
                            </button>
                            <button className='border-0 outline-0 rounded-end fw-bold text-white' onClick={increment}>
                                <span> + </span>
                            </button>
                        </div>
                        <div className="price_cart d-flex align-items-center">
                            <span className='fw-bold'>
                                <span className="needNumber">{needNumber > 1 ? `${needNumber}x` : null}</span>
                            {product.price} XOF
                            </span>
                            <button className='border-0 outline-0 rounded text-white'>
                                <FiShoppingCart />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    function increment() {
        setNeedNumber(needNumber + 1)
    }

    function decrement() {
        if(needNumber === 1) setNeedNumber(1)
        setNeedNumber(needNumber - 1)
    }
}

export default Card;
