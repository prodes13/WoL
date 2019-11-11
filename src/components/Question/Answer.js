import React from 'react';

const Answer =(props) => {
    return (
        <>
            <input type="radio" name={`question${props.index}`} value="male"/> {props.answer}
        </>
)}

export default Answer;