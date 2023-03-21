import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className=' min-h-screen grid grid-cols-1 lg:grid-cols-2'>
            <div className=' flex flex-col justify-center items-center'><h1>Home</h1></div>
            <div className='home-banner'></div>
        </div>
    );
};

export default Home;