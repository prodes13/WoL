import { call } from '../api'
import {
  REQUEST_QUESTIONS_PENDING,
  REQUEST_QUESTIONS_SUCCESS,
  REQUEST_QUESTIONS_FAILED,
  RETURN_QUESTION,
  QUESTION_INDEX_ADD,
  QUESTION_INDEX_MIN,
  SAVE_QUESTIONS_ANSWERS
 } from './constants'

export const requestQuestions = () => (dispatch) => {
  dispatch({ type: REQUEST_QUESTIONS_PENDING })
  call('http://localhost:3300/query')
    .then(data => dispatch({ type: REQUEST_QUESTIONS_SUCCESS, payload: data[0].questions }))
    .catch(error => dispatch({ type: REQUEST_QUESTIONS_FAILED, payload: error }))
}

export const saveQuestions = (answeredQuestion) => ({ type: SAVE_QUESTIONS_ANSWERS, payload: answeredQuestion});

export const returnQuestion = (question) => ({type: RETURN_QUESTION, payload: question})
export const addGlobalIndex = (globalIndex) => ({type: QUESTION_INDEX_ADD, payload: globalIndex + 1});
export const minGlobalIndex = (globalIndex) => ({type: QUESTION_INDEX_MIN, payload: globalIndex - 1});