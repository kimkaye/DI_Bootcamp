import React from 'react'
import './App.css';
// import CardsList from './components/CardsList';
// import SearchBox from './components/SearchBox';
import 'tachyons';
// import {connect} from "react-redux";
// import {searchRobot} from "./actions";
import RobotsList from "./components/RobotsList";
import SearchBar from "./components/SearchBar";

class App extends React.Component {

  // async componentDidMount(){
  //   try {
  //     let res = await axios.get('https://jsonplaceholder.typicode.com/users');
  //     let data = res.data;
  //   this.setState({arr:data})
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  render(){
    return (
      <div className='tc'>
        <SearchBar/>
        <RobotsList/>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     // property_one: state.property_one,
//     // property_two: state.property_two
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return{
//     selectMovie: (robot) => dispatch(searchRobot(robot)),
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App





