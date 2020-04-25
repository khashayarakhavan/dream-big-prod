// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utility/validateEmails';
import FIELDS from './formFields';

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({label, name}) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} /> 
        });
       
    }
   
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} >
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                    Next
                    <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    errors.recipients = validateEmails(values.recipients || '');
    _.each(FIELDS, ({name}) => {
        if (!values[name]) {
            errors[name] = 'you must provide a value for '+name;
        }
    });
   
    return errors;
}

export default reduxForm({
    destroyOnUnmount: false,
    validate: validate,
    form: 'surveyForm',
})(SurveyForm);
