import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTodo from './components/NewTodo'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todos:[]
    }

    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(value) {
    const todos = [...this.state.todos, { value, isDone: false }]
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React todo app</h1>
        </header>
        <NewTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
