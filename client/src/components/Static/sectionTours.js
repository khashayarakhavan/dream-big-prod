import React, { Component } from 'react';

class Template extends Component {
    render() {

        return (
            <section className="section-tours" id="section-tours">
                <div className="u-center-text u-margin-bottom-medium">
                    <h2 className="heading-secondary">Exciting experience</h2>
                </div>
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">&nbsp;</div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">
                                        The dream explorer
                      </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>3day tour</li>
                                        <li>upto30people</li>
                                        <li>2tourguides</li>
                                        <li>sleepinghotel</li>
                                        <li>easy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">299$</p>
                                    </div>
                                    <a href="#popup"  className="btn btn--white">Book now!</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--2">&nbsp;</div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--2">
                                        SHAJA BAJA fiveinfive
                      </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>5day tour</li>
                                        <li>upto10people</li>
                                        <li>1tourguides</li>
                                        <li>sleepinghotel</li>
                                        <li>medium</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">299$</p>
                                    </div>
                                    <a href="#popup" className="btn btn--white">Book now!</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--3">&nbsp;</div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--3">
                                        Five Tour in Five
                      </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>3day tour</li>
                                        <li>upto30people</li>
                                        <li>2tourguides</li>
                                        <li>sleepinghotel</li>
                                        <li>easy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">299$</p>
                                    </div>
                                    <a href="#popup" className="btn btn--white">Book now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="u-center-text u-margin-top-big">
                    <a href="#" onClick={e => { e.preventDefault() }} className="btn btn--green">Discover all tours</a>
                </div>

            </section>
        );
    }
}

export default (Template);