import React from 'react';
import p1 from '../../res/img/Disney.jpg';
import p2 from '../../res/img/nat-9.jpg';

const Template = () => {
    return (
       <div className="popup" id="popup">
        <div className="popup__content">
            <div className="popup__left">
                <img src={p1} alt="Tour photo" className="popup__img"/>
                <img src={p2} alt="Tour photo" className="popup__img"/>
            </div>
            <div className="popup__right">
                <a href="#section-tours" className="popup__close">&times;</a>
                <h2 className="heading-secondary u-margin-bottom-small">Book now</h2>
                <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read before booking.</h3>
                <p className="popup__text"> I am working very hard. Hello, I am working hard. Hello, I am working hard. Hello, I am working hard. Hello, I am working hard. Hello, I am working hard. Hello, I am working hard.</p>
                <a href="#" className="btn btn--green">Book Now</a>
            </div>
        </div>
       </div>
    );
};

export default Template;