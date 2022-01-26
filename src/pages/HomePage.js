import React from 'react';
import FeelSpecial from '../components/FeelSpecial';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import Header from '../components/utility/Header';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <ProductShowcase />
            <FeelSpecial />
        </div>
    );
};

export default HomePage;

