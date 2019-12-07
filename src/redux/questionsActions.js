export const createQuestion = (question) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
      firestore.collection('questions').add({
        ...question,
        answers: {
          "1": 1, 
          "2": 2,
          "3": 3, 
          "4": 4,
          "5": 5, 
          "6": 6,
          "7": 7, 
          "8": 8,
          "9": 9, 
          "10": 10
        }
      }).then(() => {
        dispatch({ type: 'CREATE_QUESTION_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_QUESTION_ERROR' }, err);
      });
    }
  };
  export const sendResults = (results) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      firestore.collection('results').add({
        ...results,
        firstName: profile.firstName,
        lastName: profile.lastName,
        profileId: authorId
      }).then(() => {
        dispatch({ type: 'SEND_RESULTS_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'SEND_RESULTS_ERROR' }, err);
      });
    }
  };