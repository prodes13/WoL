
import React from 'react'

const QuestionSummary = ({question}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{question.topic}</span>
        <p>{question.question}</p>
      </div>
    </div>
  )
}

export default QuestionSummary