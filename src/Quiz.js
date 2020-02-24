import React from 'react'; import { call } from './api'; import SubmitQuiz from './SubmitQuiz'

class Quiz extends React.Component {
  state = { error: null, isLoaded: false, questions: [], currentQuestion: 0, isDone: false, }

  constructor(props) {
    super(props)

    this.goToNextQuestion = this.goToNextQuestion.bind(this)
    this.goToPrevQuestion = this.goToPrevQuestion.bind(this)
    this.saveAnswer = this.saveAnswer.bind(this)
  }

  componentDidMount() {
    // fetching questions from the server & porting them into state
    call().then(data => { this.setState({ isLoaded: true, questions: data }); },
      // handling errors here instead of catch() block so we don't swallow exceptions from actual bugs
      (error) => { this.setState({ isLoaded: true, error }); })
  }

  goToNextQuestion() {
    if (this.state.currentQuestion >= this.state.questions.length - 1) { this.setState({ isDone: true, }) }
    else { this.setState({ currentQuestion: this.state.currentQuestion + 1 }) }
  }

  goToPrevQuestion() { this.setState({ currentQuestion: this.state.currentQuestion - 1 }) }

  saveAnswer(value) {
    const question = this.state.questions[this.state.currentQuestion]; question.answer = value
    this.goToNextQuestion()
  }

  render() {
    const { questions, isLoaded, isDone } = this.state;

    if (isDone) { return (<SubmitQuiz questions={questions} />) }
    if (!isLoaded) { return (<div>Loading...</div>) }

    const currentQuestion = questions[this.state.currentQuestion]
    const answers = currentQuestion.answers_json

    return (
      <div className="jumbotron bg-light">
        <p key={currentQuestion.id}> {currentQuestion.name} </p>

        <nav>
          <ul className="pagination">

            {this.state.currentQuestion > 0
              ? <li className="page-item"><button className="page-link" onClick={this.goToPrevQuestion}>Previous</button></li>
              : <div></div>}

            {answers.map((answer, id) =>
              <li className="page-item" key={id}><button className="page-link" onClick={() => this.saveAnswer(answer)}>{answer}</button></li>
            )}

            {this.state.currentQuestion < questions.length - 1
              ? <li className="page-item"><button className="page-link" onClick={this.goToNextQuestion}>Next</button></li>
              : <div></div>}

          </ul>
        </nav>
      </div>
    );
  }
}

export default Quiz;