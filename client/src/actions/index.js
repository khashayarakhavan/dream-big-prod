//action-creator . initiate change in our client side state.

//action-creators always return an action that is sent to Reducers 

//an action is a Javascript object with a type(name) and a payload(data)

import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_SURVEYS } from './types';

// ES2017 syntax version
export const fetchUser = () => async (dispatch) => {
       const res = await axios.get('/api/current_user');
       
       dispatch({ type: FETCH_USER, payload: res.data });
    };

// Vanilla Redux version - standard redux syntax - 
    // const fetchUser = () => {
    //     const request = axios.get('/api/current_user');
    //     return {
    //         type: FETCH_USER,
    //         payload: request
    //     };};

export const handleToken = (token) => async (dispatch) => {
    console.log(token);
    const res = await axios.post('/api/stripe', token);
    console.log(res);
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
    const res = await axios.post('/api/surveys', values);
    //history is a helper from withRouter 
    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('./api/surveys');
    
    dispatch({type: FETCH_SURVEYS, payload: res.data});
};
