import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {searchRobot} from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        const {searchRobot} = this.props;

        return (
            <input
                className="form-control"
                placeholder = "Search Robot"
                onChange={(e) => searchRobot(e.target.value)}
            />
        );
    }
}

// function mapStateToProps(state) {
//     return {value: robots.value};
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({searchRobot}, dispatch);
// }

const mapDispatchToProps = (dispatch) => {
    return{
        searchRobot: (input) => dispatch(searchRobot(input)),
    }
}

// const mapStateToProp = (state) => {
//     return {
//         robots: state.robots
//     }
// }

// export default connect(mapStateToProp, mapDispatchToProps)(MovieList)

export default connect(null, mapDispatchToProps)(SearchBar);