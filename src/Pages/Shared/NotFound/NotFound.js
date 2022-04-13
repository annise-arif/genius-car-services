import React from 'react';
import sleeping404 from '../../../images/sleeping404.jpg'

const NotFound = () => {
    return (
        <div>
        <h2 className='text-center text-danger mt-5'>Machanic is sleeping</h2>
            <img className='w-100' src={sleeping404} alt="" />
        </div>
    );
};

export default NotFound;