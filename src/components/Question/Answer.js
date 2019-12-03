import React from 'react';

const Answer = (props) => {
    const stil = props.isChecked ? "btn-primary" : "btn-outline-primary";
    return (
        <>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className={`btn ${stil} btn-xs mr-2 mt-2`}>
            <input className="mr-2" 
              type="radio" 
              name={`question${props.index}`} 
              value={props.numAns+1} 
              onChange={props.radioInputHandling} 
              checked = {props.isChecked}
              data-category = {props.category}
              /> 
          {props.answer}
        </label>  
        </div>
        </>
)}

export default Answer;