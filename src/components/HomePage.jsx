import React from "react";
import HeaderImage from './HeaderImage'
import Navbar from './Navbar'
import { headerCar } from '../assets';

const HomePage = () => {
    return (
        <div className="w-full bg-cover bg-opacity-50"  style={{ backgroundImage: `url(${headerCar})`, minHeight: '100vh', backgroundPosition: 'center' }}>
            <Navbar />
            <HeaderImage />
        </div>)
}

export default HomePage;