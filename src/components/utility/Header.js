import React, { useState } from 'react';

import "../../utility/common.scss";
import "../../utility/animation.scss";
import "./Header.scss";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    }

    return (
        <div className="header-wrapper">
            <div className="mobile-menu-wrapper only-mobile">
            <div className={`mobile-menu ${showMobileMenu ? 'overlay' : ''}`}>
                <div className="mobile-navbar">
                <div className="mobile-nav-item">credit score check</div>
                <div className="mobile-nav-item">credit card bill payment</div>
                </div>
            </div>
            </div>
            <div className="flex max-width header">
                <img 
                src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
                alt="logo"
                className="header-logo"
                />
                <div 
                className="only-mobile mobile-menu-btn-wrapper"
                >
                    <button 
                    className={`hamburger hamburger--spin ${showMobileMenu ? 'is-active' : ''}`}
                    type="button"
                    onClick={toggleMobileMenu}
                    >
                        <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                        </span>
                    </button>  
                </div>

                <div className="non-mobile flex">
                    <div className="header-nav-item">credit score check</div>
                    <div className="header-nav-item">credit card bill payment</div>
                </div>
            </div>
        </div>
    );
};

export default Header;

