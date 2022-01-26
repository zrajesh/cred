import React from 'react';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import Header from '../components/utility/Header';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <ProductShowcase />
        </div>
    );
};

export default HomePage;

