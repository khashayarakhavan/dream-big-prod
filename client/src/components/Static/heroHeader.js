import React from 'react';
import logo from '../../res/img/logo-white.png';

const Template = () => {
    return (
        <header className="header" id="header">
            <div className="header__logo-box">
                <img src={logo} alt="logo" className="header__logo" />
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Shajabaja</span>
                    <span className="heading-primary--sub">where dreams start</span>
                </h1>
                <a href="#section-tours"  class="btn btn--white btn--animated">
                    Discover options
            </a>
            </div>
        </header>
    );
};

export default Template;