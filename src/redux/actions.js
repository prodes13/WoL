import {
  RETURN_QUESTION,
  QUESTION_INDEX_ADD,
  QUESTION_INDEX_MIN,
  SAVE_QUESTIONS_ANSWERS
 } from './constants'

export const saveQuestions = (answeredQuestion) => ({ type: SAVE_QUESTIONS_ANSWERS, payload: answeredQuestion});

export const returnQuestion = (question) => ({type: RETURN_QUESTION, payload: question})
export const addGlobalIndex = (globalIndex) => ({type: QUESTION_INDEX_ADD, payload: globalIndex + 1});
export const minGlobalIndex = (globalIndex) => ({type: QUESTION_INDEX_MIN, payload: globalIndex - 1});