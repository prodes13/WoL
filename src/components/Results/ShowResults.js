import React from 'react';
import ShowChart from './ShowChart';

const ShowResults =(props) => {
    const finalQuizResults = {};
    // console.log("show results", props.results);
    if(props.results){
        const answeredArr = Object.values(props.results);
        const topics = []; 
        let reducedTopics = [];

        // console.log(answeredArr);
        answeredArr.map(el => {
            console.log(el);
            return topics.push(el[1]);
        });
        reducedTopics = topics.filter((el, index) => {
            return topics.indexOf(el) === index
        });
        console.log('TOTAL', reducedTopics);
        for(let i = 0; i < reducedTopics.length; i++) {
            for(let j =0; j < answeredArr.length; j++) {
                if (reducedTopics[i] === answeredArr[j][1]) {
                    finalQuizResults[reducedTopics[i]] = parseInt(finalQuizResults[reducedTopics[i]] || 0) + parseInt(answeredArr[j][0]);
                }
            }
        }
        console.log("FINAL SUM: ", finalQuizResults);
        
    }
    return  <>
            <h1>Showing Results</h1>
            {/* <h2>
                { finalQuizResults && Object.keys(finalQuizResults)}
            </h2> */}
            <ShowChart data={finalQuizResults}/>
            </>
}

export default ShowResults;

/*

{
  "SĂNĂTATE ȘI ENERGIE": 17,
  "EMOȚII ȘI OBIECTIVE": 6
}

*/