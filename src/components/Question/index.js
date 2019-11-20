import React from 'react';
import Answer from './Answer';
const Question =(props) => {
    console.log("Received state in component: ", props.savedQuestions);
    
    return (

    <>
        { props.question &&
            <h2 className="display-5 mb-4">{props.question.question}</h2>
        }
        { props.question &&
            Object.values(props.question.answers).map((el, numAns) => <Answer key = {props.index +''+ numAns} answer={el} radioInputHandling = {props.radioInputHandling} numAns={numAns} index={props.index}/>)
        }
    </>
)}

export default Question;