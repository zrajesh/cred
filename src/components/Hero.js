import React from 'react';
import Button from './utility/Button';

import "./Hero.scss";
import "../utility/common.scss";

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="flex absolute-center hero-claim-label">
                <div>pay credit card bill. earn guaranteed ₹200 back.</div>
                <div className="claim-anchor">
                claim now
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
                alt="arrow" className="claim-arrow" />
                </div>
            </div>
            <div className="flex absolute-center flex-col max-width hero">
                <div className="hero-heading">
                rewards for paying credit card bills.
                </div>
                <div className="hero-subheading">
                join 7.5M+ members who win rewards and cashbacks everyday
                </div>
                <Button buttonText="Download CRED" />
            </div>
        </section>
    );
};

export default Hero;

