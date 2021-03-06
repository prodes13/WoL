import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { requestQuestions, returnQuestion, addGlobalIndex, minGlobalIndex, saveQuestions } from './redux/actions';

import Question from './components/Question/Question';
import ShowResults from './components/Results/ShowResults';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.requestQuestions.searchField,
    questions: state.requestQuestions.questions,
    isPending: state.requestQuestions.isPending,
    question: state.returnQuestion.question,
    globalIndex: state.returnGlobalIndex.globalIndex,
    questionsAnswered: state.saveQuestions.questionsAnswered
  }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestQuestions: () => dispatch(requestQuestions()),
    returnQuestion: (question) => dispatch(returnQuestion(question)),
    addGlobalIndex: (globalIndex) => dispatch(addGlobalIndex(globalIndex)),
    minGlobalIndex: (globalIndex) => dispatch(minGlobalIndex(globalIndex)),
    saveQuestions: (answeredQuestion) => dispatch(saveQuestions(answeredQuestion))
  }
}

class App extends Component {
  state = {
    start: false,
    isSubmit: false
  }
    componentDidMount() {
      this.props.onRequestQuestions()
      this.props.returnQuestion(this.props.questions[this.props.globalIndex])
    }

// handling radio buttons
  handleRadioSelect = (event) =>{
    // getting the custom data attribute - topic of the question
    const category = event.target.attributes.getNamedItem("data-category").value;
    // saving answered questions in REDUX
    this.props.saveQuestions({...this.props.questionsAnswered, [event.target.name]: [event.target.value, category]})
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
      this.props.returnQuestion(this.props.questions[this.props.globalIndex])
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

    submitAnswers = () => {
      this.setState({
        isSubmit: true
      });
    }

  render() {

    const { isPending, question } = this.props;
    const show = this.state.start ? "d-block" : "d-none";
    const startScreen = this.state.start ? "d-none" : "d-flex";

    return (
            <div className="container text-center mt-4">

            <div className={`jumbotron quiz-box align-items-center ${startScreen}`}>
              <button type="button" 
                      className="btn btn-primary btn-lg btn-block" 
                      onClick={this.startQuiz}>
                      Începe testul!
              </button>
            </div>
            { 
              !this.state.isSubmit &&
                <div className={`jumbotron quiz-box ${show}`}>
                    {/* Loading questions */}
                    { isPending &&
                        <div className="spinner-border text-center" role="status">
                          {/* <span className="sr-only">Loading...</span> */}
                          <span>Loading...</span>
                        </div>
                    }
                    <Question key={this.props.globalIndex} 
                              question = {question} 
                              index = {this.props.globalIndex} 
                              radioInputHandling = { this.handleRadioSelect}
                              savedQuestions = {this.props.questionsAnswered} 
                              />
                    <hr/>
                    <div className="btn-toolbar mt-4" role="toolbar" aria-label="Quiz control">
                      <div className="btn-group mx-auto" role="group" aria-label="First group">
                        { 
                          this.props.globalIndex > 0 &&
                          <button type="button" 
                                  className="btn btn-info" 
                                  onClick={this.prevQuestion}>
                                  <i className="fa fa-arrow-left mr-3"></i>
                          </button>
                        }
                        <span className="badge"><h3>{this.props.globalIndex + 1}/{this.props.questions.length}</h3></span>
                        {
                          this.props.globalIndex < this.props.questions.length - 1 && 
                            <button type="button" 
                                  className="btn btn-info" 
                                  onClick={this.nextQuestion}>
                                  <i className="fa fa-arrow-right ml-3"></i>
                            </button>
                          }
                      </div>
                    </div>
                  {/* submitting answers */}
                  <button type="button" 
                          onClick={this.submitAnswers}
                          className="btn btn-outline-primary mt-5">
                          Trimite raspunsurile tale
                  </button>
                </div>
                }

              {
                this.state.isSubmit && <ShowResults results={this.props.questionsAnswered} />
              }
            </div>
    );
  }
}
// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)