import React from 'react';

const ShowResults =(props) => {
    console.log("show results", props.results);
    if(props.results){
        const answeredArr = Object.values(props.results);
        const topics = []; 
        let reducedTopics = [];
        const finalSum = {};

        console.log(answeredArr);
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
                    finalSum[reducedTopics[i]] = parseInt(finalSum[reducedTopics[i]] || 0) + parseInt(answeredArr[j][0]);
                }
            }
        }
        console.log(finalSum);
        
    }
    return  <>
            <h1>Showing Results</h1>

            </>
}

export default ShowResults;