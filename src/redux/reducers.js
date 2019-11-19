import {
    REQUEST_QUESTIONS_PENDING,
    REQUEST_QUESTIONS_SUCCESS,
    REQUEST_QUESTIONS_FAILED,
    RETURN_QUESTION,
    QUESTION_INDEX_ADD,
    QUESTION_INDEX_MIN,
    SAVE_QUESTIONS_ANSWERS
   } from './constants';
  
  const initialIndex = {
    globalIndex: 0
  }
  const initialStateQuestions = {
    questions: [],
    isPending: true
  }
  
  export const requestQuestions = (state=initialStateQuestions, action={}) => {
    switch (action.type) {
      case REQUEST_QUESTIONS_PENDING:
        return Object.assign({}, state, {isPending: true})
      case REQUEST_QUESTIONS_SUCCESS:
        return Object.assign({}, state, {questions: action.payload, isPending: false})
      case REQUEST_QUESTIONS_FAILED:
        return Object.assign({}, state, {error: action.payload})
      default:
        return state
    }
  }

  const initialStateQNum = {
    question: null
  }

  export const returnQuestion = (state = initialStateQNum, action = {}) => {
    switch (action.type) {
      case RETURN_QUESTION:
        return Object.assign({}, state, {question: action.payload})
      default:
        return state
    }
  }
  
  export const returnGlobalIndex = (state = initialIndex, action = {}) => {
    switch (action.type) {
      case QUESTION_INDEX_ADD:
        return Object.assign({}, state, { globalIndex: action.payload })
      case QUESTION_INDEX_MIN:
        return Object.assign({}, state, { globalIndex: action.payload })
      default: 
        return state
    }
  }

  const initialStateAnswered = {
    questionsAnswered: null
  }

  export const saveQuestions = (state = initialStateAnswered, action = {}) => {
    switch (action.type) {
      case SAVE_QUESTIONS_ANSWERS:
        return Object.assign({}, state, {questionsAnswered: action.payload});
      default:
        return state;
    }
  }