import React, { Component } from 'react'

class App extends Component {
  
  state = {
    count: 0
  }

  handleIncrement = (test) => { 
    console.log("test",test)
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }

}

export default App;

