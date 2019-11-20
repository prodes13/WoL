import React from 'react';
import Answer from './Answer';
const Question =(props) => {
    console.log("Received state in component: ", props.savedQuestions);

    // console.log(props.savedQuestions['question' + props.index]);
// retrieving question number and answer, arg is affected by starting index at 0 
    const getAnswered = (arg) => {
        if (props.savedQuestions) {
            if (parseInt(props.savedQuestions['question' + props.index])=== (arg+1)) return true;
        }
        return false;
    }

    return (
    <>
        { props.question &&
            <h2 className="display-5 mb-4">{props.question.question}</h2>
        }
        { props.question &&
            Object.values(props.question.answers)
                    .map((el, numAns) => <Answer key = {props.index +''+ numAns} 
                                                answer={el} 
                                                radioInputHandling = {props.radioInputHandling} 
                                                numAns={numAns} 
                                                index={props.index}
                                                isChecked={getAnswered(numAns)}
                                                category={props.question.topic}
                                                />)
        }
        {
            props.savedQuestions &&
            <p>Answer was: {props.savedQuestions['question' + props.index]}</p>
        }
    </>
)}

export default Question;