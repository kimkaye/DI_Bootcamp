import React, { Component } from 'react';
import { connect } from 'react-redux';
// import React, { useEffect, useState } from "react"
import {insertRobotData} from "../actions";



class RobotsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: []
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(robots => {this.props.insertRobotData({robots: robots})})
    }

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

function mapDispatchToProps(dispatch){
    return {
        insertRobotData: (value) => dispatch(insertRobotData(value))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(RobotsList);

