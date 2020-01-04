import React from 'react'

class SubmitQuiz extends React.Component {
    render() {
        return (
            <div>
                <div className="alert alert-success">
                    Multumim pentru timpul acordat
                    </div>
                <button className="btn btn-success">Trimite raspunsurile</button>
            </div>
        )
    }
}

export default SubmitQuiz