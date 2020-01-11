import React from 'react'
import { sendResults } from './api' 

class SubmitQuiz extends React.Component {
    state = {
        token: '',
        results: [],
    }

    constructor(props) {
        super(props)
        this.sendAnswers = this.sendAnswers.bind(this)
    }

    componentDidMount() {
        let results = this.props.questions
        this.setState({
            results: results
        })
    }

    sendAnswers() {
        //insert here POST request
        console.log(this.state)
        sendResults(this.state.token, this.state.results)
    }

    render() {
        return (
            <div>
                <div className="alert alert-success">
                    Multumim pentru timpul acordat
                    </div>
                <div>Insert token here:</div>
                <input value={this.state.token} onChange={(event) => this.setState({
                    token: event.target.value
                })} />
                <br />
                <button className="btn btn-success" onClick={this.sendAnswers}>Trimite raspunsurile</button>
            </div>


        )
    }
}

export default SubmitQuiz