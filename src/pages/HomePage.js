import React from 'react';
import Brands from '../components/Brands';
import Experience from '../components/Experience';
import FeelSpecial from '../components/FeelSpecial';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import Security from '../components/Security';
import Header from '../components/utility/Header';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <ProductShowcase />
            <FeelSpecial />
            <Brands />
            <Experience />
            <Security />
        </div>
    );
};

export default HomePage;

