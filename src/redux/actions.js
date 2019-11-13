import { apiCall } from '../apiCall/apiCall'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_QUESTIONS_PENDING,
  REQUEST_QUESTIONS_SUCCESS,
  REQUEST_QUESTIONS_FAILED,
  RETURN_QUESTION
 } from './constants'


export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const requestQuestions = () => (dispatch) => {
  dispatch({ type: REQUEST_QUESTIONS_PENDING })
  apiCall('/query')
    .then(data => dispatch({ type: REQUEST_QUESTIONS_SUCCESS, payload: data[0].questions }))
    .catch(error => dispatch({ type: REQUEST_QUESTIONS_FAILED, payload: error }))
}

export const returnQuestion = (question) => ({type: RETURN_QUESTION, payload: question})