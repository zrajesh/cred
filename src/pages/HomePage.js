import React from 'react';
import Brands from '../components/Brands';
import Experience from '../components/Experience';
import FeelSpecial from '../components/FeelSpecial';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import Security from '../components/Security';
import Header from '../components/utility/Header';
import WindowPeak from '../components/WindowPeak';

import "../utility/common.scss";

const HomePage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <ProductShowcase />
            <FeelSpecial />
            <Brands />
            <Experience />
            <div className="non-mobile">
            <WindowPeak />
            </div>
            <Security />
        </div>
    );
};

export default HomePage;

