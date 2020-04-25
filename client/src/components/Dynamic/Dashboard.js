import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from '../surveys/SurveyList';

const Dashboard = () => {
    return (
        <div className="fixed-action-btn">
            <SurveyList /> 
            <Link to="/surveys/new" className="btn-floating btn-large red">
                <i className="material-icons">add</i>
            </Link>
        </div>
    );
};

export default Dashboard;
