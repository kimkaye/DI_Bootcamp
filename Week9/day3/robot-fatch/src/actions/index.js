// import {
//     REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED
// } from '../constants'
//

export const SEARCH = 'SEARCH';
export const ROBOTS_INSERT = 'ROBOTS_INSERT';

export function searchRobot(value) {
    return {type: SEARCH, value};
}
export function insertRobotData(value) {
    return {type: ROBOTS_INSERT, value};
}

// export const requestRobots = (dispatch)

// export const fetchRobots = (sname,fname) => (dispatch) => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(users => {this.setState({robots: users})})
// }



////

// export const setNames = (name,value) => {
//     return {
//         type:name,
//         payload: value
//     }
// }
//
// export const findMatch = (sname,fname) => (dispatch) => {
//     fetch(`https://jsonplaceholder.typicode.com/users`, {
//         "method": "GET",
//         // "headers": {
//         //     "x-rapidapi-host": "love-calculator.p.rapidapi.com",
//         //     "x-rapidapi-key": "8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c"
//         // }
//     })
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             // this.setState({results:data})
//             dispatch({type:'FIND_MATCH', payload: data})
//         })
//         .catch(err => {
//             console.error(err);
//         });
// }

// export const findMatch = (data) => {
//   return {
//     type: 'FIND_MATCH',
//     payload: data
//   }
// }

//
// export const setFname = (value) => {
//   return {
//     type:'fname',
//     payload: value
//   }
// }
//
// export const setSname = (value) => {
//   return {
//     type:'sname',
//     payload: value
//   }
// }
