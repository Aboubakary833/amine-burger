import React from 'react';

const Product = ({product}) => {
    return (
        <div className='product mb-1 d-flex align-items-center rounded'>
            <img src={product.img} alt={product.name} />
            <p className='text-popone'>{product.name}</p>
        </div>
    );
}

export default Product;
