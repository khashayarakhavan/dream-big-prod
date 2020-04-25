import React , {Component} from 'react';
import { connect } from 'react-redux';
import {fetchSurveys} from '../../actions';

class SurveyList extends Component {
    componentDidMount(){
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div>
                    <div >
                    <div className="card blue-grey darken-1" style={{ width:"50px" , margin: "10%", padding:"1rem"}} key={survey._id}>
                        <div className="card-content ">
                            <span className="card-title">{survey.title}</span>
                            <p>{survey.body}</p>
                            <p className="right">
                                sent on: {new Date(survey.dateSent).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="card-action">
                            <a href="#">Yes: {survey.yes}</a>
                            <a href="#">No: {survey.no}</a>
                        </div>
                    </div>
                    </div>
                    </div>
               
            );
        });
    }
    render() {
        return(
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}
function mapStateToProps({surveys}) {
    return { surveys : surveys }
}

export default connect(mapStateToProps, { fetchSurveys }) (SurveyList);