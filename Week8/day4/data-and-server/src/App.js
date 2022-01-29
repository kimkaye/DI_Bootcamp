import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverResponse: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // fetch('http://localhost:5000/api/hello')
        //     .then(res => res.json())
        //     .then(json => this.setState({ data: json }));
    }


    async handleSubmit(event){
        event.preventDefault();
        console.log(event);
        console.log(event.target.firstName.value);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName: event.target.firstName.value })
            // body: event.target.firstName.value
        };
        let response = await fetch('http://localhost:5000/api/world', requestOptions);
        let serverResponse = await response.text();
        console.log(serverResponse);
            // .then(response => response.json())
            // .then((data) => {
            //     element.innerHTML = data.id
            // } );
        this.setState({
            serverResponse: serverResponse
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        // value={this.state.firstName}
                        // onChange={this.onChange}
                    />
                    <button type="submit" value="Submit">Submit</button>
                </form>
                <p>
                    {this.state.serverResponse}
                </p>
            </div>
        );
    }
}

export default App;

// ReactDOM.render(<App />, document.getElementById("app"));
