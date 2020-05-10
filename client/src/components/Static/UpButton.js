import React from 'react';

const Template = () => {
    return (
      <div className="UpButton">
        
        <a href="#header" className="UpButton__button">
          <span className="UpButton__icon">&nbsp;</span>
        </a>

        <div className="UpButton__background">&nbsp;</div>

        {/* Here is the section which covers the whole page when toggle is clicked.  */}
        <nav className="UpButton__nav">
          <ul className="UpButton__list">
            <li className="UpButton__item">
              <a href="#" className="UpButton__link">
                <span>01</span>About
              </a>
            </li>
            <li className="UpButton__item">
              <a href="#" className="UpButton__link">
                <span>02</span>Profile
              </a>
            </li>
            <li className="UpButton__item">
              <a href="#" className="UpButton__link">
                <span>03</span>Tours
              </a>
            </li>
            <li className="UpButton__item">
              <a href="#" className="UpButton__link">
                <span>04</span>Bigger Titles here
              </a>
            </li>
            <li className="UpButton__item">
              <a href="#" className="UpButton__link">
                <span>05</span>Book Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
};

export default Template;