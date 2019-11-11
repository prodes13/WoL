import React from 'react';
import Answer from './Answer';
const Question =(props) => {
    return (

    <div>
        <p>{props.question}</p>
        <div>
            {
                Object.values(props.answers).map((el) => <Answer answer={el} index={props.index}/>)
            }
        </div>
    </div>
)}

export default Question;