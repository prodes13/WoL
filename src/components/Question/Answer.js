import React from 'react';

const Answer = (props) => {
    return (
        <>
        <label className="btn btn-primary btn-lg mr-4">
          <input className="mr-2" 
            type="radio" 
            name={`question${props.index}`} 
            value={props.numAns+1} 
            onChange={props.radioInputHandling} 
            /> 
        {props.answer}
        </label>  
        </>
)}

export default Answer;

/*

if (document.getElementById('r1').checked) {
  rate_value = document.getElementById('r1').value;
}

and using these

https://stackoverflow.com/questions/53735695/how-to-get-the-checked-value-of-a-radio-button-using-react
*/