
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import FIELDS from './formFields';
import * as actions from '../../actions';
import { withRouter} from 'react-router-dom';

const SurveyFormReview = ({ onBack, formValues, submitSurvey, history}) => {
    const reviewFields = _.map(FIELDS, ({ label, name }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });
    
    return (
       
        <div>
            <h5>Please check the inputs</h5>
            {reviewFields}
            <button className="yellow darken-3 btn-flat white-text" onClick={onBack}>
            Back
            </button>
            <button onClick={() => submitSurvey(formValues, history)} className="green btn-flat right white-text">
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    // console.log(state);
    return { formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps, actions) (withRouter(SurveyFormReview));