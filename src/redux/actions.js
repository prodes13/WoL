import { call } from '../api'

export const requestQuestions = () => (dispatch) => {
  dispatch()
  call('http://localhost:3300/query')
}