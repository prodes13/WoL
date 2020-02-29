import React from 'react'
import { sendResults } from './api'
import ShowResults from './components/Results/ShowResults'

class SubmitQuiz extends React.Component {
    state = {
        token: '',
        results: [],
        topics: [],
        showChart: false
    }

    constructor(props) {
        super(props)
        this.sendAnswers = this.sendAnswers.bind(this)
        this.parseAnswers = this.parseAnswers.bind(this)
    }

    componentDidMount() {
        let results = this.props.questions
        this.setState({
            results: results
        })
    }

    parseAnswers(results) {
        let topics = []
        results.map(el => topics.push({[el.topic.name]: el.answer}))
        this.setState({
            topics,
            showChart:true
        })
    }

    sendAnswers() {
        //insert here POST request
        sendResults(this.state.token, this.state.results)
        this.parseAnswers(this.state.results)
    }

    render() {
        return (
            <div>
                <div className="alert alert-success"> Multumim pentru timpul acordat </div>

                <div>Insert token here:</div>

                <input value={this.state.token} onChange={(event) => this.setState({ token: event.target.value })} />

                <br /> <br />

                <div> <button className="btn btn-success" onClick={this.sendAnswers}>Trimite raspunsurile</button> </div>
                {this.state.showChart && <ShowResults results = {this.state.topics}/>}
            </div>
        )
    }
}

export default SubmitQuiz