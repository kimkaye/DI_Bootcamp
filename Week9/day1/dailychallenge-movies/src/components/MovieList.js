import React from 'react';
import {connect} from "react-redux";
import {selectMovieAction} from "../actions";

class MovieList extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return (
            <div className="App">
                <h1>MovieList</h1>
                <header>
                    {
                        this.props.movies.map((movie, i) => {
                            return (
                                <div key={i}>
                                    {movie.title}
                                    <button onClick={() => this.props.selectMovie(movie)}>Details</button>
                                </div>)
                        })
                    }
                </header>
            </div>
        )
    }
}


// export default MovieList

const mapDispatchToProps = (dispatch) => {
    return{
        selectMovie: (movie) => dispatch(selectMovieAction(movie)),
    }
}

const mapStateToProp = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(MovieList)


