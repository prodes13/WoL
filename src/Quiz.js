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
  
  render() {
    const { questions, isLoaded } = this.state;

    if(!isLoaded)
      return (
        <div>loading</div>
      )

    const currentQuestion = questions[this.state.currentQuestion]
    
    return (
      <div>
          <p key={currentQuestion.id}>
            {currentQuestion.name}
          </p>
          <button onClick={this.goToNextQuestion}>next</button>
      </div>
    );
  }
}

export default ApiCall;