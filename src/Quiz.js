import React, { Component } from 'react';
import './Quiz.css';
import { connect } from 'react-redux';
import { requestQuestions, returnQuestion, addGlobalIndex, minGlobalIndex, saveQuestions } from './redux/actions';
import Question from './components/Question/Question';
import { Redirect } from 'react-router-dom';
import { Jumbotron, Button, ProgressBar } from 'react-bootstrap';
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
    isSubmit: false,
    animation: false
  }
  componentDidMount() {
    this.props.onRequestQuestions()
    this.props.returnQuestion(this.props.questions[this.props.globalIndex])
  }

  // handling radio buttons
  handleRadioSelect = (event) => {
    // getting the custom data attribute - topic of the question
    const category = event.target.attributes.getNamedItem("data-category").value;
    // saving answered questions in REDUX
    this.props.saveQuestions({ ...this.props.questionsAnswered, [event.target.name]: [event.target.value, category] });

    // start animation
    this.setState({ animation: true })
    // wait for fade out animation to end and change the question
    setTimeout(() => this.nextQuestion(), 200)
    // hack: remove the animation from the newly created question for a nice fade in effect
    setTimeout(() => this.setState({ animation: false }), 201)
  }

  nextQuestion = () => {
    if (this.props.globalIndex < this.props.questions.length - 1) {
      this.props.addGlobalIndex(this.props.globalIndex);
      this.displayQuestion();
    }

  }

  displayQuestion = () => (
    this.props.returnQuestion(this.props.questions[this.props.globalIndex])
  )

  prevQuestion = () => {
    if (this.props.globalIndex > 0) {
      this.props.minGlobalIndex(this.props.globalIndex);
      this.displayQuestion();
    }
  }

  startQuiz = () => {
    this.setState({
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
    const { isPending, question } = this.props;
    const show = this.state.start ? "d-block" : "d-none";
    const startScreen = this.state.start ? "d-none" : "d-flex";
    let barPercentage = 0;
    if (this.props.questionsAnswered) {
      barPercentage = Math.round(((Object.values(this.props.questionsAnswered).length) / this.props.questions.length) * 100);
      isActive = !((this.props.globalIndex + 1) <= Object.values(this.props.questionsAnswered).length)
    }

    const animationClass = this.state.animation ? 'opacity-0' : ''
    
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
              {/* Loading questions */}
              {isPending &&
                <div className="spinner-border text-center" role="status">
                  {/* <span className="sr-only">Loading...</span> */}
                  <span>Loading...</span>
                </div>
              }

              {
                this.props.question &&
                <p className={"mb-4 question " + animationClass}>{this.props.question.question}</p>
              }
              <div className="answers">
                <Question key={this.props.globalIndex}
                  question={question}
                  index={this.props.globalIndex}
                  radioInputHandling={this.handleRadioSelect}
                  savedQuestions={this.props.questionsAnswered}
                />

                <ProgressBar
                  className="m-4"
                  now={barPercentage}
                  animated
                  label={`${barPercentage}%`}
                />

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
                        <span className="badge"><h3>{this.props.globalIndex + 1}/{this.props.questions.length}</h3></span>
                      {
                        this.props.globalIndex < this.props.questions.length - 1 &&
                        <button type="button"
                          className="btn btn-sm btn-outline-primary"
                          onClick={this.nextQuestion}
                          disabled={isActive}>
                          <i className="fa fa-arrow-right ml-1"></i>
                        </button>
                      }
                      {this.props.globalIndex > this.props.questions.length - 2 &&
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
// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)