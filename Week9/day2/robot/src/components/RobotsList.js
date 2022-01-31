import React, { Component } from 'react';
import { connect } from 'react-redux';

class RobotsList extends Component {
    render() {
        return (
            <header>
                {
                    this.props.robots.map((robot, i) => {
                        return (
                            <div key={i} className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
                               <b> {robot.name}</b>
                                <br/>
                                {robot.email}
                                <br/>
                                {robot.username}
                                <br/>
                                <img src={`https://robohash.org/${i}?size=200x200`} />
                            </div>)
                    })
                }
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        robots: state.filteredRobots
    }
}

export default connect(mapStateToProps)(RobotsList);