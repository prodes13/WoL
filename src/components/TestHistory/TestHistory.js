import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment'
import ShowChart from '../Results/ShowChart';
import { Container, Jumbotron } from 'react-bootstrap'

const TestHistory = (props) => {
  if (props.data) console.log("xxxx", props.data);
  
    if(props.results) {
        props.results.map(el => console.log(el.results));
    }

    return <Container>
    {
      props.results && props.results.map(el => (
        <Jumbotron key={el.id}>
          <p>{el.firstName}</p>
          <p>{moment(el.takenAt.toDate()).calendar()}</p>
          <ShowChart data={el.results}/>
        </Jumbotron>
      ))  
    }
    </Container>
}


// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    results: state.firestore.ordered.results,
    data: state.firestore.data
  }
}
/*
results: state.firestore.ordered.results for
*/
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'results' }
  ])
)(TestHistory)
