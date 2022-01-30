// import React from 'react';
// import {connect} from "react-redux";
//
//
//
// class MovieDetails extends React.Component {
//
//     // constructor(props) {
//     //     super(props);
//     // }
//
//     render() {
//         return (
//             <div>
//                 <li className="title">{this.props.movie}</li>
//             </div>
//         );
//     }
// }
// export default MovieDetails
//
// const mapStateToProp = (state) => {
//     return{
//         movie: state.movie
//     }
// }
//
// export default connect(mapStateToProp) (MovieDetails)

import React from 'react';
import {connect} from "react-redux";

class MovieDetails extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const selectedMovieTitle = this.props.selectedMovie.title;

        return (
            <div className="App">
                <h1>MovieDetails</h1>
                <header>
                    {selectedMovieTitle ? '' : <h5>Select A Movie</h5>}
                    {this.props.selectedMovie.title}
                    {this.props.selectedMovie.releaseDate}
                    {this.props.selectedMovie.rating}
                </header>
            </div>
        )
    }
}


// export default MovieDetails


const mapStateToProp = (state) => {
    return{
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProp)(MovieDetails)


