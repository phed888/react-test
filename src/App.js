import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// start serving with the terminal command 'yarn start'

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
        ]
    };

    switchNameHandler = (newName) => {
        this.setState({persons: [
                { name: newName, age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 27 }
            ]
        })
    };

    nameChangedHandler = (event) => {
        this.setState({persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Stephanie', age: 27 }
            ]
        })
    }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
          <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
          <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}/>
          <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Max!')}
              changed={this.nameChangedHandler}>My hobbies: Racing</Person>
          <Person
              name={this.state.persons[2].name}
               age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
