import React from 'react';
import Product from './Product';

const Block = ({title, data}) => {
    return (
        <div className="col-12 col-md-6 cart rounded">
                    <h2 className="mt-1 text-popone text-suncolor">{title}</h2>
                    <div className="row mt-2">
                        <div className="col-12 col-lg-6">
                            <Product product={data} />
                        </div>
                        <div className="col-12 col-lg-6">
                            <Product product={data} />
                        </div>
                        <div className="col-12 col-lg-6">
                            <Product product={data} />
                        </div>
                        <div className="col-12 col-lg-6">
                            <Product product={data} />
                        </div>
                    </div>
                </div>
    );
}

export default Block;
