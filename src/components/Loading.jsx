import React from 'react';
import { BiLoaderCircle } from 'react-icons/bi';

const Loading = () => {
    return (
        <div className='loading mt-4 py-2 d-flex justify-content-center align-items-center text-suncolor'>
            <BiLoaderCircle className='loader' />
        </div>
    );
}

export default Loading;
