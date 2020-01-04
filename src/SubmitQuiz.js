import React from 'react'

class SubmitQuiz extends React.Component {
    constructor(props) {
        super(props)
    }

    sendAnswers() {
        //insert here POST request
        alert("sending")
    }

    render() {
        return (
            <div>
                <div className="alert alert-success">
                    Multumim pentru timpul acordat
                    </div>
                <button className="btn btn-success" onClick={this.sendAnswers}>Trimite raspunsurile</button>
            </div>

            
        )
    }
}

export default SubmitQuiz