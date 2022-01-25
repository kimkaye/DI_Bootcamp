import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      languages : [
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
      ]
    }
  }

  handleClick = (val) => {
    this.state.languages[val].votes++;
    let newLanguages = [...this.state.languages]
    this.setState({languages:newLanguages});
  }

  render(){
    return (
        <div className="App">
          <header className="App-header">
            {
              this.state.languages.map((item,i)=>{
                return (
                    <div key={i}>
                      {item.name} {item.votes}
                      <button onClick={()=>this.handleClick(i)}>Add One</button>
                    </div>)
              })
            }
          </header>
        </div>
    );
  }
}

export default App;
