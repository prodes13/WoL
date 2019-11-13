import React from 'react';

const Answer = (props) => {
    return (
        <>
                <label className="btn btn-primary btn-lg mr-4"><input className="mr-2" type="radio" name={`question${props.index}`} value="{props.answer}"/> {props.answer}</label>  
        </>
)}

export default Answer;



//       <input type="radio" aria-label="Radio button for following text input">

//   <input type="text" class="form-control" aria-label="Text input with radio button">
// </div>


// https://bootsnipp.com/snippets/DVv0a