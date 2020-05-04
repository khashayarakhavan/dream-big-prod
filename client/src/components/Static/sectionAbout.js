import React from 'react';
import p1 from '../../res/img/Disney.jpg';
import p3 from '../../res/img/robot.jpg';
import p2 from '../../res/img/nat-9.jpg';
import nat1large from '../../res/img/nat-1-large.jpg';
import nat1small from '../../res/img/nat-1.jpg';
import nat2large from '../../res/img/nat-2-large.jpg';
import nat2small from '../../res/img/nat-2.jpg';
import nat3large from '../../res/img/nat-3-large.jpg';
import nat3small from '../../res/img/nat-3.jpg';

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
                        {/* Resolution and Density switching decided by Browser */}
                        <img 
                        srcSet={`${nat1small} 300w, ${nat1large} 1000w`} 
                        sizes="(max-width: 62.5em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt="photo 1"
                            className="composition__photo composition__photo--p1"
                            src={nat1large} />
                        <img
                            srcSet={`${nat2small} 300w, ${nat2large} 1000w`}
                            sizes="(max-width: 62.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt="photo 2"
                            className="composition__photo composition__photo--p2"
                            src={nat2large} />
                        <img
                            srcSet={`${nat3small} 300w, ${nat3large} 1000w`}
                            sizes="(max-width: 62.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt="photo 3"
                            className="composition__photo composition__photo--p3"
                            src={nat3large} />
                        {/* <img
                            src={p1}
                            alt="photo 1"
                            className="composition__photo composition__photo--p1"
                        /> */}
                        {/* <img
                            src={p2}
                            alt="photo 2"
                            className="composition__photo composition__photo--p2"
                        />
                        <img
                            src={p3}
                            alt="photo 3"
                            className="composition__photo composition__photo--p3"
                        /> */}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Template;