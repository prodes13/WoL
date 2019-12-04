import {
    RETURN_QUESTION,
    QUESTION_INDEX_ADD,
    QUESTION_INDEX_MIN,
    SAVE_QUESTIONS_ANSWERS
   } from './constants';
  
  const initialIndex = {
    globalIndex: 0
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