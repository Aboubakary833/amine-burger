import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import Loading from '../components/Loading';

const Menu = () => {
    const {products} = useSelector(store => store)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(_ => {
        if(products) setTimeout(_ => setIsLoading(false), 1700)
        else setTimeout(() => setIsLoading(false), 1000);
    })
    return isLoading ? <Loading /> : (
        <div className='mt-4 mt-lg-3 mb-2'>
            <div className="row g-3">
                {products.map((product, index) => {
                    return <Card product={product} key={index} />
                })}
            </div>
        </div>
    );
}

export default Menu;
