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

        const numberOfTopics = Object.values(topicsList.reduce((acum,cur) => Object.assign(acum,{[cur]: (acum[cur] | 0)+1}),{}));

        reducedTopicsList = topicsList.filter((el, index) => {
            return topicsList.indexOf(el) === index
        });

        for(let i = 0; i < reducedTopicsList.length; i++) {
            for(let j =0; j < allTopicsWithAnswers.length; j++) {
                if (reducedTopicsList[i] === allTopicsWithAnswers[j][1]) {
                    finalQuizResults[reducedTopicsList[i]] = parseInt(finalQuizResults[reducedTopicsList[i]] || 0) + parseInt(allTopicsWithAnswers[j][0]);
                }
            }
        }

        // average for every topic/category
        Object.keys(finalQuizResults).map((key, index) => (
            finalQuizResults[key] = Math.round(finalQuizResults[key] / numberOfTopics[index])
        ));
       
        // console.log("FINAL SUM: ", finalQuizResults);
    }
    return  <>
            <h1>Showing Results</h1>
            <ShowChart data={finalQuizResults}/>
            </>
}

export default ShowResults;