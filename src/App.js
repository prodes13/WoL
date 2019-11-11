import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { connect } from 'react-redux';
import { setSearchField, requestQuestions } from './redux/actions';

import Question from './components/Question';
// import data from './data/data.json';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.requestQuestions.searchField,
    questions: state.requestQuestions.questions,
    isPending: state.requestQuestions.isPending
  }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    // onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestQuestions: () => dispatch(requestQuestions())
  }
}

class App extends Component {
    componentDidMount() {
      this.props.onRequestQuestions();
    }
  render() {

    const { questions, searchField, onSearchChange, isPending } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
            { isPending &&
                <div>Loading questions...</div>
            }
            { !isPending &&
              questions.map((el, index) => (
                <Question question = {el.question} index = {index} answers={el.answers} />
              ))
            }
          </div>
        </header>
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