const initState = {}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_QUESTION_SUCCESS':
      console.log('create question success');
      return state;
    case 'CREATE_QUESTION_ERROR':
      console.log('create question error');
      return state;
    default:
      return state;
  }
};

export default projectReducer;