import React from 'react';
import ShowChart from './ShowChart';

const ShowResults = (props) => {
        const finalQuizResults = {};

    if(props.results){        
        const allTopicsWithAnswers = Object.values(props.results);        
        const topicsList = []; 
        let reducedTopicsList = [];

        allTopicsWithAnswers.map(el => {
            return topicsList.push(Object.keys(el)[0]);
        });
        
        const numberOfTopics = Object.values(topicsList.reduce((acum,cur) => Object.assign(acum,{[cur]: (acum[cur] | 0)+1}),{}));

        reducedTopicsList = topicsList.filter((el, index) => {
            return topicsList.indexOf(el) === index
        });

        for(let i = 0; i < reducedTopicsList.length; i++) {
            for(let j =0; j < allTopicsWithAnswers.length; j++) {
                if (reducedTopicsList[i] === Object.keys(allTopicsWithAnswers[j])[0]) {
                    finalQuizResults[reducedTopicsList[i]] = parseInt(finalQuizResults[reducedTopicsList[i]] || 0) + parseInt(Object.values(allTopicsWithAnswers[j]));
                }
            }
        }

        // average for every topic/category
        Object.keys(finalQuizResults).map((key, index) => (
            finalQuizResults[key] = Math.round((finalQuizResults[key] || 1)  / numberOfTopics[index])
        ));
    }
    return  <div className="container text-center">
                <h3>Rezultatele tale:</h3>
                <ShowChart data={finalQuizResults}/>    
            </div>
}

export default ShowResults