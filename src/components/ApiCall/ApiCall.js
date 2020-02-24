import React from 'react'; import { call } from '../../api'

class ApiCall extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, isLoaded: false, questions: [] };
    }

    componentDidMount() {
        // fetching questions from the server and porting them into state
        call().then(data => {
            this.setState({ isLoaded: true, questions: data });
        },
            //handle errors here instead of catch block so we don't swallow exceptions from actual bugs
            (error) => {
                this.setState({ isLoaded: true, error });
            }
        )
    }

    render() {
        const { error, isLoaded } = this.state;

        if (error) { return <div>Error: {error.message}</div>; }
        else if (!isLoaded) { return <div>Loading...</div>; }
         else {
            return (
                <div>
                    {this.state.questions.map(questions => (
                        <p key={questions.id}>
                            {questions.name}
                        </p>
                    ))}
                </div>
            );
        }
    }
}

export default ApiCall;