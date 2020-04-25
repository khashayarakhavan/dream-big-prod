import React from 'react';

const Template = () => {
    return (
       <div className="navigation">
           <input type="checkbox" className="navigation__checkbox" id="navigation-toggle"/>
           <label htmlFor="navigation-toggle" className="navigation__button">
               <span className="navigation__icon">&nbsp;</span>
           </label>
           <div className="navigation__background">&nbsp;</div>

           {/* Here is the section which covers the whole page when toggle is clicked.  */}
           <nav className="navigation__nav">
               <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>01</span>About</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Profile</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>Tours</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>04</span>Bigger Titles here</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>05</span>Book Now</a></li>
               </ul>
           </nav>
       </div>
    );
};

export default Template;