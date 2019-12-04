import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

import { returnQuestion, addGlobalIndex, minGlobalIndex, saveQuestions } from '../../redux/actions';

import Question from '../Question/Question';
import { Jumbotron, Button } from 'react-bootstrap';

class ListQuestions extends Component {

  state = {
    start: false,
    isSubmit: false
  }
    componentDidMount() {
      if(this.props.questions) {
        this.props.returnQuestion(this.props.questions[this.props.globalIndex])
      }
    }

    // handling radio buttons
  handleRadioSelect = (event) =>{
    // getting the custom data attribute - topic of the question
    const category = event.target.attributes.getNamedItem("data-category").value;
    // saving answered questions in REDUX
    this.props.saveQuestions({...this.props.questionsAnswered, [event.target.name]: [event.target.value, category]})
  }

    nextQuestion = () => {
      if(this.props.globalIndex < this.props.questions.length - 1) {
        this.props.addGlobalIndex(this.props.globalIndex);
        this.displayQuestion();
      }

    }

    displayQuestion = () => (
      this.props.returnQuestion(this.props.questions[this.props.globalIndex])
    )

    prevQuestion = () => {
      if(this.props.globalIndex > 0) {
        this.props.minGlobalIndex(this.props.globalIndex);
        this.displayQuestion();
      }
    }

    startQuiz = () => {
      this.setState({
        // index: 0,
        start: true
      }, () => this.displayQuestion());
    }

    submitAnswers = () => {
      this.setState({
        isSubmit: true
      });
    }


    render() {
      let isActive = true;
      let length = 0;
      const { question, questions } = this.props;
      if(this.props.questions) {
        length = this.props.questions.length;
      }
      const show = this.state.start ? "d-block" : "d-none";
      const startScreen = this.state.start ? "d-none" : "d-flex";
  
      if(this.props.questionsAnswered) {
        isActive = !((this.props.globalIndex+1) <= Object.values(this.props.questionsAnswered).length)
      }
  
      return (
        <>
              <div className="container text-center">
  
              
                <Jumbotron className={`bg-light quiz-box align-items-center ${startScreen}`}>
                  <Button variant="primary"
                          size="lg"
                          block
                          onClick={this.startQuiz}
                  >
                          Începe testul!
                  </Button>
                </Jumbotron>
              { 
                !this.state.isSubmit &&
                  <Jumbotron className={`bg-light quiz-box ${show}`}>
                      {
                        this.props.question && 
                        <p className="mb-4">{this.props.question.question}</p>
                      }
                      <div className="answers">
                      <Question key={this.props.globalIndex} 
                                question = {question} 
                                index = {this.props.globalIndex} 
                                radioInputHandling = { this.handleRadioSelect}
                                savedQuestions = {this.props.questionsAnswered} 
                                />
                      <hr/>
  
                      <div className="arrow-buttons">
                        <div className="btn-toolbar mt-4" role="toolbar" aria-label="Quiz control">
                          <div className="btn-group mx-auto" role="group" aria-label="First group">
                            { 
                              this.props.globalIndex > 0 &&
                              <button type="button" 
                                      className="btn btn-sm btn-outline-primary" 
                                      onClick={this.prevQuestion}>
                                      <i className="fa fa-arrow-left mr-1"></i>
                              </button>
                            }
                            <span className="badge"><h3>{this.props.globalIndex + 1}/{length}</h3></span>
                            {
                              this.props.globalIndex < length - 1 && 
                                <button type="button" 
                                      className="btn btn-sm btn-outline-primary" 
                                      onClick={this.nextQuestion}
                                      disabled={isActive}>
                                      <i className="fa fa-arrow-right ml-1"></i>
                                </button>
                            }
                            { this.props.globalIndex > length - 2 && 
                              <button type="button" 
                                      onClick={this.submitAnswers}
                                      className="btn btn-outline-primary rounded ml-2 send-button">
                                      Submit
                              </button>
                            }
                          </div>
                        </div>
                      </div>
                        </div>
                  </Jumbotron>
                  }
            </div>
              {
                this.state.isSubmit && 
                      <Redirect
                        to={{
                          pathname: "/results"
                        }}
                      />
              }
            </>
      );
    }
  }



// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    questions: state.firestore.ordered.questions,
    auth: state.firebase.auth,
    question: state.returnQuestion.question,
    globalIndex: state.returnGlobalIndex.globalIndex,
    questionsAnswered: state.saveQuestions.questionsAnswered
  }
}
// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    returnQuestion: (question) => dispatch(returnQuestion(question)),
    addGlobalIndex: (globalIndex) => dispatch(addGlobalIndex(globalIndex)),
    minGlobalIndex: (globalIndex) => dispatch(minGlobalIndex(globalIndex)),
    saveQuestions: (answeredQuestion) => dispatch(saveQuestions(answeredQuestion))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'questions' }
  ])
)(ListQuestions)