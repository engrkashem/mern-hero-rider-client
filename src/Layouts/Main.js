import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';
import NavBar from '../components/Shared/NavBar';

const Main = () => {
    return (
        <div className=' min-h-screen flex flex-col justify-between'>
            <NavBar></NavBar>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;