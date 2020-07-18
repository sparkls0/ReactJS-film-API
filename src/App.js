import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    post: {}
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        this.setState({post: result})
        console.log(result)
      })
  }
  render() {
  return (
    <div className="App">
      <h1>Notre dernier article :</h1>
      {this.state.post.title}
    </div>
  );
};
}

export default App;
