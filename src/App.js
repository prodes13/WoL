import React, { Component } from 'react';


import { connect } from 'react-redux';
import { setSearchField, requestQuestions, returnQuestion } from './redux/actions';

import Question from './components/Question';
// import data from './data/data.json';

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
    index: -1
  }
    componentDidMount() {
      this.props.onRequestQuestions()
      this.props.returnQuestion(this.props.questions[this.state.index])
    }

    nextQuestion = () => {
      if(this.state.index < this.props.questions.length - 1) {
        this.setState({
          index: this.state.index +1
        });
      }

      this.props.returnQuestion(this.props.questions[this.state.index])
    }

    prevQuestion = () => {
      if(this.state.index > 0) {
        this.setState({
          index: this.state.index - 1
        });
      }

      this.props.returnQuestion(this.props.questions[this.state.index])
    }

    startQuiz = () => {
      this.setState({
        index: 0
      });
      this.props.returnQuestion(this.props.questions[this.state.index])
      console.log("THIS is ", this.props.question);
    }
  render() {

    const { questions, searchField, onSearchChange, isPending, question } = this.props;
    return (
            <div className="container text-center">
              <button onClick={this.startQuiz}>START</button>
            <button onClick={this.prevQuestion}>Previous</button>
            <button onClick={this.nextQuestion}>Next</button>

            <div className="jumbotron">
                <Question key={this.state.index} question = {question} index = {this.state.index} />
            </div>

            { isPending &&
                <div className="spinner-border text-center" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
            }
            {/* { !isPending &&
              questions.map((el, index) => (
                <div className="jumbotron">
                <Question key={index} question = {el.question} index = {index} answers={el.answers} />
                </div>
              ))
            } */}
            {
              // console.log("new start", questions[this.state.index])
            }

            </div>
    );
  }
}
// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)

/*


class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}


*/