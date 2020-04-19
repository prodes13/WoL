// import { call } from '../api';
import {data} from '../data/db';

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
  console.log("DATA ", data);
  dispatch({ type: REQUEST_QUESTIONS_SUCCESS, payload: data.query[0].questions })
  // fetch('http://wol.taskme.eu/db.json')
  // // parsing questions in JSON format
  // .then(response => {
  //   console.log(response);
  //   return response.json()
  // }) 
  //   .then(data => {
  //     console.log("data ->", data.query[0]);
      
  //     dispatch({ type: REQUEST_QUESTIONS_SUCCESS, payload: data.query[0].questions })})
  //   .catch(error => dispatch({ type: REQUEST_QUESTIONS_FAILED, payload: error }))
}

export const saveQuestions = (answeredQuestion) => ({ type: SAVE_QUESTIONS_ANSWERS, payload: answeredQuestion});

export const returnQuestion = (question) => ({type: RETURN_QUESTION, payload: question})
export const addGlobalIndex = (globalIndex) => ({type: QUESTION_INDEX_ADD, payload: globalIndex + 1});
export const minGlobalIndex = (globalIndex) => ({type: QUESTION_INDEX_MIN, payload: globalIndex - 1});