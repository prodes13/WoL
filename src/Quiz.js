import React from 'react';
import { call } from './api'

class ApiCall extends React.Component {
  // initial state
  state = {
    error: null,
    isLoaded: false,
    questions: [],
    currentQuestion: 0,
  };

  constructor(props) {
    super(props);

    this.goToNextQuestion = this.goToNextQuestion.bind(this)
    this.goToPrevQuestion = this.goToPrevQuestion.bind(this)
  }

  componentDidMount() {
    // questions are fetched from the server
    call()
      // porting questions into state
      .then(data => {
        this.setState({
          isLoaded: true,
          questions: data
        },
        );
      },
        // it's important to handle errors here instead of a catch() block
        // so that we don't swallow exceptions from actual bugs in components
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  goToNextQuestion() {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    })
  }

  goToPrevQuestion() {
    this.setState({
      currentQuestion: this.state.currentQuestion - 1
    })
  }


  render() {
    const { questions, isLoaded } = this.state;

    if (!isLoaded)
      return (
        <div>loading</div>
      )

    const currentQuestion = questions[this.state.currentQuestion]
    const answers = currentQuestion.answers_json

    return (
      <div>
        <p key={currentQuestion.id}>
          {currentQuestion.name}
        </p>

        <nav>
          <ul className="pagination">

            {this.state.currentQuestion > 0
              ? <li className="page-item"><a className="page-link" href="#" onClick={this.goToPrevQuestion}>Previous</a></li>
              : <div></div>}

            {answers.map(answer =>
              <li className="page-item"><a className="page-link" href="#" onClick={this.goToNextQuestion}>{answer}</a></li>
            )}

            {this.state.currentQuestion < questions.length - 1
              ? <li className="page-item"><a className="page-link" href="#" onClick={this.goToNextQuestion}>Next</a></li>
              : <div></div>}

          </ul>
        </nav>
      </div>
    );
  }
}

export default ApiCall;