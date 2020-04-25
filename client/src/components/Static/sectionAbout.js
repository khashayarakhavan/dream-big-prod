import React from 'react';
import p1 from '../../res/img/Disney.jpg';
import p2 from '../../res/img/nat-9.jpg';
import p3 from '../../res/img/robot.jpg';

const Template = () => {
    return (
        <section className="section-about">
            <div className="u-center-text u-margin-bottom-medium">
                <h2 className="heading-secondary">Exciting experience</h2>
            </div>
            <div className="row u-margin-bottom-big">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        You are going to immerse yourself in dreams
                </h3>
                    <p className="paragraph">
                        shaja baja mashan baji kalti vely vely five in five in five
                </p>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        what an amazing website
                </h3>
                    <p className="paragraph">aftofl is very guten boyen disch</p>
                    <a href="#" onClick={e => { e.preventDefault() }} className="btn-text">
                        Learn more &rarr;
                </a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img
                            src={p1}
                            alt="photo 1"
                            className="composition__photo composition__photo--p1"
                        />
                        <img
                            src={p2}
                            alt="photo 2"
                            className="composition__photo composition__photo--p2"
                        />
                        <img
                            src={p3}
                            alt="photo 3"
                            className="composition__photo composition__photo--p3"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Template;