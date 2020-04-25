import React, { Component } from 'react';
import videoBgMp4 from '../../res/img/video.mp4';
import videoBgWebm from '../../res/img/video.webm';
import p1 from '../../res/img/Disney.jpg';
import p2 from '../../res/img/nat-9.jpg';

class Stories extends Component {
    render() {

        return (
            <section className="section-stories">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src={videoBgMp4} type="video/mp4" />
                        <source src={videoBgWebm} type="video/webm" />
              Yours browser is not supporting videos!
            </video>
                </div>
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">Here you go</h2>
                </div>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img
                                src={p1}
                                alt="photo 1"
                                className="story__image"
                            />
                            <figcaption className="story__caption">Aftofl veryBIG5</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">Amazing experience</h3>
                            <p>
                                What an amazing company you are!What an amazing company you are!What an amazing company you are!What an amazing company you are!What an amazing company you are!What an amazing company you are!What an amazing company you are!
                </p>

                        </div>

                    </div>

                </div>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img
                                src={p2}
                                alt="photo 2"
                                className="story__image"
                            />
                            <figcaption className="story__caption">Mashma Loven</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">Beautiful Aftofl</h3>
                            <p>
                                What an amazing company you are!What an amazing company you are!What an amazing company you are!What an amazing company you are!What an amazing company you are!What an amazing company you are!What an amazing company you are!
                </p>
                        </div>
                    </div>
                </div>
                <div className="u-center-text u-margin-top-big">
                    <a href="#" onClick={e => { e.preventDefault() }} className="btn-text">More anecdotes &rarr;</a>
                </div>
            </section>
        );
    }
}

export default (Stories);