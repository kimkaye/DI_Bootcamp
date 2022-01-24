// import React from 'react';
// import Form from './components/Form';
//
// class App extends React.Component {
//     constructor() {
//         super();
//     }
//
//     handleSubmit = event => {
//         event.preventDefault();
//         let inputs = event.target.getElementsByTagName('input')
//         for (const item of inputs) {
//             console.log(item.value)
//         }
//     }
//
//     render() {
//         return (
//             <div className="box" >
//                 <Form handleSubmit={this.handleSubmit} />
//             </div>
//         )
//     }
// }
//
// export default App;


import React from 'react';
import Form from './components/Form'
import './App.css';

const App = () => {

    return (
        <div className="box">
            <br/>
            <Form />
        </div>
    )
}

export default App;