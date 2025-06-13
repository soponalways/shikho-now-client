import React, { use } from 'react';
import AuthContext from '../../../Context/AuthContext/AuthContext';

const Home = () => {
    const data = use(AuthContext); 
    console.log("Data in the context" , data)
    return (
        <div>
            <h3 className='text-2xl font-semibold'>Hello from Home pages </h3>
        </div>
    );
};

export default Home;