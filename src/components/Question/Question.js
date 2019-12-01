import React from 'react';
import Answer from './Answer';
const Question =(props) => {
    // console.log("Received state in component: ", props.savedQuestions);
    // retrieving question number and answer, numAns is affected by starting index at 0 
    const getAnswered = (numAns) => {
        if (props.savedQuestions) {
            if (parseInt(props.savedQuestions['question' + props.index])=== (numAns+1)) return true;
        }
        return false;
    }

    if(props.question) return (
        <>
            <div className="row">
            <div  className="col-xs-12 mx-auto">
                {Object.values(props.question.answers)
                        .map((el, numAns) => <Answer key = {props.index +''+ numAns} 
                                                    answer={el} 
                                                    radioInputHandling = {props.radioInputHandling} 
                                                    numAns={numAns} 
                                                    index={props.index}
                                                    isChecked={getAnswered(numAns)}
                                                    category={props.question.topic}
                                                    />)}
            </div>
            </div>
        </>
    );
    return(<p>Loading ... </p>)   
}

export default Question;