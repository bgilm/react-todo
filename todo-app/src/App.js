import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'
import { guid } from './utils/uuid'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todos:[],
      isEverythingChecked: false,
      visibilityFilter: 'All'
    }

    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.toggleIsDone = this.toggleIsDone.bind(this)
  }

  addTodo(value) {
    const todos = [...this.state.todos, { id: guid(), value, isDone: false }]
    this.setState({ todos })
  }

  deleteTodo(id) {
    const actualTodos = this.state.todos
    const todos = actualTodos.filter(todo => todo.id !== id)
    this.setState({ todos })
  }

  toggleIsDone(id) {
    let todos = this.state.todos
    const foundIndex = todos.findIndex(todo => todo.id === id);
    todos[foundIndex].isDone = !todos[foundIndex].isDone
    this.setState({ todos })
  }

  clearEverything() {
    this.setState({todos:[]})
  }

  checkEverything() {
    const { todos, isEverythingChecked } = this.state
    todos.forEach(todo => todo.isDone = !isEverythingChecked)
    this.setState({ todos, isEverythingChecked: !isEverythingChecked })
  }

  clearCompleted() {
    const actualTodos = this.state.todos
    const todos = actualTodos.filter(todo => todo.isDone === false )
    this.setState({todos})
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React todo app</h1>
        </header>
        <NewTodo addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} toggleIsDone={this.toggleIsDone}/>
      </div>
    );
  }
}

export default App;
