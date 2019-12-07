import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ShowChart from '../Results/ShowChart';

const TestHistory = (props) => {
    let results = {};
    let username = null;
    if(props.results) {
        console.log("&&&", Object.values(props.results[0]));
        results = Object.values(props.results[0])[4];
        username = Object.values(props.results[0])[2];
    }
    console.log(results);

    return <>
    {   
        props.results && (
        
            <ShowChart data={results}/>
        ) 
    }
    </>
}


// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    results: state.firestore.ordered.results
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'results' }
  ])
)(TestHistory)
