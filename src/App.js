import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { requestQuestions, returnQuestion, addGlobalIndex, minGlobalIndex } from './redux/actions';

import Question from './components/Question';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.requestQuestions.searchField,
    questions: state.requestQuestions.questions,
    isPending: state.requestQuestions.isPending,
    question: state.returnQuestion.question,
    globalIndex: state.returnGlobalIndex.globalIndex
  }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    // onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestQuestions: () => dispatch(requestQuestions()),
    returnQuestion: (question) => dispatch(returnQuestion(question)),
    addGlobalIndex: (globalIndex) => dispatch(addGlobalIndex(globalIndex)),
    minGlobalIndex: (globalIndex) => dispatch(minGlobalIndex(globalIndex))
  }
}

class App extends Component {
  state = {
    index: 0,
    start: false,
    questionsAnswered: {}
  }
    componentDidMount() {
      this.props.onRequestQuestions()
      this.props.returnQuestion(this.props.questions[this.state.index])
    }
// handling radio buttons
handleRadioSelect = (event) =>{
  console.log(event.target.name, event.target.value );
  
  this.setState({ questionsAnswered : {
    ...this.state.questionsAnswered,
    [event.target.name]: [event.target.value, "category"]
  }});

  console.log('[[[[[[]]]]]', this.state);
}

    nextQuestion = () => {
      if(this.state.index < this.props.questions.length - 1) {
        this.props.addGlobalIndex(this.props.globalIndex);
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
        this.props.minGlobalIndex(this.props.globalIndex);
        this.setState({
          index: this.state.index - 1
        }, () => this.displayQuestion());
      }

    }

    startQuiz = () => {
      this.setState({
        index: 0,
        start: true
      }, () => this.displayQuestion());
    }

  render() {

    const { isPending, question } = this.props;
    const show = this.state.start ? "d-block" : "d-none";
    const startScreen = this.state.start ? "d-none" : "d-flex";

    return (
            <div className="container text-center mt-4">

            <div className={`jumbotron quiz-box align-items-center ${startScreen}`}>
              <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.startQuiz}>Start your quiz!</button>
            </div>

            <div className={`jumbotron quiz-box ${show}`}>
                <Question key={this.state.index} question = {question} index = {this.state.index} radioInputHandling = { this.handleRadioSelect} />
                <hr/>
                <div className="btn-toolbar mt-4" role="toolbar" aria-label="Quiz control">
                  <div className="btn-group mx-auto" role="group" aria-label="First group">
                    <button type="button" className="btn btn-info" onClick={this.prevQuestion}><i className="fa fa-arrow-left mr-3"></i>Prev</button>
    <span className="badge"><h3>{this.state.index + 1}/{this.props.questions.length}</h3></span>
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