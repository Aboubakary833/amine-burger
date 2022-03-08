import React from 'react';

const Command = ({product}) => {
    return (
        <div className="command">
            <div>
                <img src={product.image} alt={product.name} />
                <small>{product.name}</small>
            </div>
            <div>
                <span>
                    <small>{product.amount} × </small>
                    <small>{product.price} FCFA</small>
                </span>
                <span>{product.created_at}</span>
            </div>
        </div> 
    );
}

export default Command;
