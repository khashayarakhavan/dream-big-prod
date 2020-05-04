import React from 'react';

import p1 from '../../res/img/logo-green-2x.png';
import p1small from '../../res/img/logo-green-1x.png';
import p2 from '../../res/img/logo-green-small-2x.png';
import p2small from '../../res/img/logo-green-small-1x.png';

const Template = () => {
    return (
        <footer className="section-footer">
        <div className="footer">

        <div className="footer__logo-box">
        {/* Art Direction for footer photo, changing size and resolution density based on media queries. */}
                    <picture clanssName="footer__logo">
                        <source srcSet={`${p2small} 1x, ${p2} 2x`} media="(max-width: 37.5em)" />
                        <img
                            className="footer__logo"
                            srcSet={`${p1small} 1x, ${p1} 2x`}
                            alt="Full Logo" />
                    </picture>;    
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item"><a href="" className="footer__link">Company</a></li>
                        <li className="footer__item"><a href="" className="footer__link">Contct us</a></li>
                        <li className="footer__item"><a href="" className="footer__link">Careers</a></li>
                        <li className="footer__item"><a href="" className="footer__link">Privacy Policy</a></li>
                        <li className="footer__item"><a href="" className="footer__link">Terms</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-1-of-2">
                <p className="footer__copyright">
                Built by <a href="#" className="footer__link">AftoflBIG5</a> for online course. <a href="#" className="footer__link"> Css and Saas</a> . Copyright &copy; by AftoflBIG5
                </p>
            </div>
        </div>
            
        </div>
        </footer>
    );
};

export default Template;