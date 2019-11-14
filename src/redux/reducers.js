import {
    REQUEST_QUESTIONS_PENDING,
    REQUEST_QUESTIONS_SUCCESS,
    REQUEST_QUESTIONS_FAILED,
    RETURN_QUESTION
   } from './constants';
  
  // const initialStateSearch = {
  //   searchField: ''
  // }
  
  // export const searchRobots = (state=initialStateSearch, action={}) => {
  //   switch (action.type) {
  //     case CHANGE_SEARCHFIELD:
  //       return Object.assign({}, state, {searchField: action.payload})
  //     default:
  //       return state
  //   }
  // }
  
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
  