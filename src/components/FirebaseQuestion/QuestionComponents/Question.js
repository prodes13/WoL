import React from 'react'
import QuestionSummary from './QuestionsSummary'

const Question = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
            <QuestionSummary project={project} />
        )
      })}  
    </div>
  )
}

export default Question