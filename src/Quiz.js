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

    return (
      <div>
        <p key={currentQuestion.id}>
          {currentQuestion.name}
        </p>

        <nav>
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#" onClick={this.goToPrevQuestion}>Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">5</a></li>
            <li className="page-item"><a className="page-link" href="#">6</a></li>
            <li className="page-item"><a className="page-link" href="#">7</a></li>
            <li className="page-item"><a className="page-link" href="#">8</a></li>
            <li className="page-item"><a className="page-link" href="#">9</a></li>
            <li className="page-item"><a className="page-link" href="#">10</a></li>
            <li className="page-item"><a className="page-link" href="#" onClick={this.goToNextQuestion}>Next</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default ApiCall;