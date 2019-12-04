import React from 'react'
import QuestionSummary from './QuestionsSummary'

const Question = ({questions}) => {
  return (
    <div className="project-list section">
      { questions && questions.map(question => {
        return (
            <QuestionSummary question={question} />
        )
      })}  
    </div>
  )
}

export default Question