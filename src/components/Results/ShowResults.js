import React from 'react';
import ShowChart from './ShowChart';

const ShowResults =(props) => {
    const finalQuizResults = {};
    // console.log("show results", props.results);
    if(props.results){
        const allTopicsWithAnswers = Object.values(props.results);
        const topicsList = []; 
        let reducedTopicsList = [];

        // console.log("allTopicsWithAnswers:", allTopicsWithAnswers);
        allTopicsWithAnswers.map(el => {
            // console.log(el);
            return topicsList.push(el[1]);
        });
        reducedTopicsList = topicsList.filter((el, index) => {
            return topicsList.indexOf(el) === index
        });
        console.log('TOTAL', reducedTopicsList);
        for(let i = 0; i < reducedTopicsList.length; i++) {
            for(let j =0; j < allTopicsWithAnswers.length; j++) {
                if (reducedTopicsList[i] === allTopicsWithAnswers[j][1]) {
                    finalQuizResults[reducedTopicsList[i]] = parseInt(finalQuizResults[reducedTopicsList[i]] || 0) + parseInt(allTopicsWithAnswers[j][0]);
                }
            }
        }
        // console.log("FINAL SUM: ", finalQuizResults);
    }
    return  <>
            <h1>Showing Results</h1>
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