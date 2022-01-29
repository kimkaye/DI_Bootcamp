import React from 'react';

class Navbar extends React.Component {


    render() {
        return (
            <div className="nav">
                    <div className="nav-links">
                        <h2>Superheroes Memory Game</h2>
                        <h4>Get points by clicking on an image but don't click on any more than once!
                        </h4>
                        <h3>Score: {this.props.score} <br/>
                            Top Score: {this.props.topScore}
                        </h3>
                    </div>
            </div>
        );
    }
}

export default Navbar