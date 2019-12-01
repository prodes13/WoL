import React from 'react';

const Answer = (props) => {
    return (
        <>
        <label className="btn btn-primary btn-xs mr-2">
          <input className="mr-2 text-center" 
            type="radio" 
            name={`question${props.index}`} 
            value={props.numAns+1} 
            onChange={props.radioInputHandling} 
            checked = {props.isChecked}
            data-category = {props.category}
            /> 
        {props.answer}
        </label>  
        </>
)}

export default Answer;