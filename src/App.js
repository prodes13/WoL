import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { requestQuestions, returnQuestion } from './redux/actions';

import Question from './components/Question';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.requestQuestions.searchField,
    questions: state.requestQuestions.questions,
    isPending: state.requestQuestions.isPending,
    question: state.returnQuestion.question
  }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    // onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestQuestions: () => dispatch(requestQuestions()),
    returnQuestion: (question) => dispatch(returnQuestion(question))
  }
}

class App extends Component {
  state = {
    index: 0
  }
    componentDidMount() {
      this.props.onRequestQuestions()
      this.props.returnQuestion(this.props.questions[this.state.index])
    }

    nextQuestion = () => {
      if(this.state.index < this.props.questions.length - 1) {
        this.setState({
          index: this.state.index +1
        }, () => this.displayQuestion());
      }

    }

    displayQuestion = () => (
      this.props.returnQuestion(this.props.questions[this.state.index])
    )

    prevQuestion = () => {
      if(this.state.index > 0) {
        this.setState({
          index: this.state.index - 1
        }, () => this.displayQuestion());
      }

    }

    startQuiz = () => {
      this.setState({
        index: 0
      }, () => this.displayQuestion());
    }

  render() {

    const { isPending, question } = this.props;
    return (
            <div className="container text-center">

            <div className="jumbotron quiz-box">
              <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.startQuiz}>Start your quiz!</button>
            </div>

            <div className="jumbotron quiz-box">
                <Question key={this.state.index} question = {question} index = {this.state.index} />
                <hr/>
                <div className="btn-toolbar mt-4" role="toolbar" aria-label="Quiz control">
                  <div className="btn-group mx-auto" role="group" aria-label="First group">
                    <button type="button" className="btn btn-info" onClick={this.prevQuestion}><i class="fa fa-arrow-left mr-3"></i>Prev</button>
                    <button type="button" className="btn btn-info" onClick={this.nextQuestion}>Next<i className="fa fa-arrow-right ml-3"></i></button>
                  </div>
                </div>
            </div>

            { isPending &&
                <div className="spinner-border text-center" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
            }
            </div>
    );
  }
}
// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)