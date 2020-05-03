import React, { Component } from 'react';

class Booking extends Component {
    render() {

        return (
            <section className="section-booking">
                <div className="row">
                    <div className="book">
                        <div className="book__form">
                            <form action="#" className="form">
                                <div className="u-margin-bottom-medium">
                                    <h2 className="heading-secondary">Book now!</h2>
                                </div>
                                <div className="form__group ">
                                    <input type="text" className="form__input" id="fullname" placeholder="fullname" required />
                                    <label htmlFor="fullname" className="form__label">fullname</label>
                                </div>
                                <div className="form__group">
                                    <input type="email" className="form__input" id="email" placeholder="email address" required />
                                    <label htmlFor="email" className="form__label">email address</label>
                                </div>
                                <div className="form__group u-margin-bottom-small">
                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id='smallTour' name="tourSize"/>
                                        <label htmlFor="smallTour" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            small tour group
                                        </label>
                                    </div>
                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id='largeTour' name="tourSize" />
                                        <label htmlFor="largeTour" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            large tour group
                                        </label>
                                    </div>
                                    <div className="form__group u-margin-top-medium">
                                        <button className="btn btn--green">Next Step &rarr;</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default (Booking);