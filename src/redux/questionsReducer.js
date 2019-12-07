const initState = {}

const questionsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_QUESTION_SUCCESS':
      console.log('create question success');
      return state;    
    case 'SEND_RESULTS__SUCCESS':
      console.log('send results success');
      return state;
    case 'CREATE_QUESTION_ERROR':
      console.log('create question error');
      return state;
    case 'SEND_RESULTS_ERROR':
      console.log('send results error');
      return state;
    default:
      return state;
  }
};

export default questionsReducer;