import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createQuestion } from '../../redux/projectActions';
import { Redirect } from 'react-router-dom'

import { Container, Jumbotron, Form, Button } from 'react-bootstrap'

class CreateQuestion extends Component {
  state = {
    topic: '',
    question: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createQuestion(this.state);
    // this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <>
    <Container>
        <Jumbotron className="bg-light">
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="topic">
                    <Form.Label>Topic</Form.Label>
                    <Form.Control type="text" placeholder="Topicul intrebarii" onChange={this.handleChange} required/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="question">
                    <Form.Label>Intrebare</Form.Label>
                    <Form.Control type="text" onChange={this.handleChange}  placeholder="Introdu intrebarea aici!" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <br />

                <Button variant="primary"
                    type="submit"
                    size="lg"
                    block>
                    Creaza intrebare
                </Button>
            </Form>
        </Jumbotron>
    </Container>
    </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createQuestion: (question) => dispatch(createQuestion(question))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion)

// title devine topic,
// content devine question
// "topic": "SĂNĂTATE ȘI ENERGIE",
// "question": "Cât de fericit te simți cu starea generala de sănătate și de bună-dispoziție pe care le ai acum,  la acest moment?",
// "answers": {
//     "1": "1",
//     "2": "2",
//     "3": "3",
//     "4": "4",
//     "5": "5",
//     "6": "6",
//     "7": "7",
//     "8": "8",
//     "9": "9",
//     "10": "10"
// }