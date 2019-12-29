import React from 'react';

class ApiCall extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            questions: []
        };
    }

        componentDidMount() {
        
        // questions are fetched from the server
        fetch("http://ec2-35-180-208-195.eu-west-3.compute.amazonaws.com/data")
            // parsing questions in JSON format
            .then(response => response.json())
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

    render() {
        const { error, isLoaded } = this.state;
        
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    {this.state.questions.map(questions => (
                        <li key={questions.id}>
                            {questions.id}. {questions.name}
                        </li>
                    ))}
                </div>
            );
        }
    }
}

export default ApiCall;