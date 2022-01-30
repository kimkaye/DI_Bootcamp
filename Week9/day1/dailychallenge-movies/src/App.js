import logo from './logo.svg';
import './App.css';
import React from 'react';
import {connect} from "react-redux";
import {selectMovieAction} from "./actions";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";



class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     property_one: "property one",
  //     property_two: "property two"
  //   }
  // }

  render() {
    return(
        // <div className="App">
          <div className="App-header">
             <MovieList/>
             <MovieDetails/>
          </div>
        // </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    // property_one: state.property_one,
    // property_two: state.property_two
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    selectMovie: (movie) => dispatch(selectMovieAction(movie)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App








