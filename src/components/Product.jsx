import React from 'react';

const Product = ({product, hasAdditional}) => {
    const amount = <div className='amount d-flex justify-content-center align-items-center rounded-circle'>{product.amount || 1}</div>
    const time = <small className='time'>{product.created_at || null}</small>
    return (
        <div className='product mb-1 d-flex align-items-center justify-content-between rounded'>
            <img src={product.img} alt={product.name} />
            <p className='text-popone'>{product.name}</p>
            <div className="d-flex flex-column justify-content-center align-items-center">
            {product.amount > 1 ? amount : null}
            {hasAdditional ? time : null}
            </div>
        </div>
    );
}

export default Product;
