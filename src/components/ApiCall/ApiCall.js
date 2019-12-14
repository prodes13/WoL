import React from 'react';

class ApiCall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            name: "",
            answer: ""
        };
    }

    componentDidMount() {
        fetch("http://ec2-35-180-208-195.eu-west-3.compute.amazonaws.com/data")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {/* fix this
                    {items.map(item => (
                        <li key={item.name}>
                            {item.name} {item.answer}
                        </li>
                    ))} */}
                </ul>
            );
        }
    }
}

export default ApiCall;