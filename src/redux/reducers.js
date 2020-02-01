const initialIndex = {
  globalIndex: 0
}
const initialStateQuestions = {
  questions: [],
  isPending: true
}

export const requestQuestions = (state = initialStateQuestions, action = {}) => {
  switch (action.type) {
    default:
      return state
  }
}

const initialStateQNum = {
  question: null
}

export const returnQuestion = (state = initialStateQNum, action = {}) => {
  switch (action.type) {
    default:
      return state
  }
}

export const returnGlobalIndex = (state = initialIndex, action = {}) => {
  switch (action.type) {
    default:
      return state
  }
}

const initialStateAnswered = {
  questionsAnswered: null
}

export const saveQuestions = (state = initialStateAnswered, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
}