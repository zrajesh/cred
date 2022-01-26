import React, { useEffect, useRef, useState } from 'react';

import "../utility/animation.scss";
import "./ProductShowcase.scss";

const ProductShowcase = () => {
    const [animateProducts, setAnimateProducts] = useState(false);
    const ref = useRef(null);

    const toggleAnimation = (event) => {
        if(event[0].isIntersecting) {
            setAnimateProducts(true);
        }
    }
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }

    useEffect(() => {
        const oberserver = new IntersectionObserver(toggleAnimation, options);
        if(!animateProducts) {
            if(ref.current) {
                oberserver.observe(ref.current)
            }
        }
        return () => {
            if(ref.current) {
                oberserver.unobserve(ref.current);
            }
        }
    });

    return (
        <div 
        ref={ref}
        className={`product-showcase ${animateProducts ? 'scale-in-bottom' : ''}`}>
            {
                animateProducts &&
                <div className="showcase-wrapper">
                <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png"
                alt="product"
                className="showcase-ui showcase-mockup-1" />
                <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png"
                alt="product"
                className="showcase-ui showcase-mockup-2" />
                <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png"
                alt="product"
                className="showcase-ui showcase-mockup-3" />
                <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png"
                alt="product"
                className="showcase-ui showcase-mockup-4" />
                <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png"
                alt="product"
                className="showcase-ui showcase-mockup-5" />
            </div>
            }
        </div>
    );
};

export default ProductShowcase;

