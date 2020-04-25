// SurveyField contains logic to render a single
// label and text input
import React from 'react';

// input eventHandlers automatically added via Redux-Form as props to any rendered component
export default ({ input, label, meta: { error, touched} }) => {
    console.log(error);
    
    return (
        <div>
        {/* ... means that we add all keyvalues inside the object and we add them to input as event handlers */}
        {/* so it means like onBlur={input.onBlur} or so on  */}
           
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px'}} />
            <div className="red-text" style={{ marginBottom: '20px'}}>
                {touched && error} 
            </div>
            
        </div>
    );
};
