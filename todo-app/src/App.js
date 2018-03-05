import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import { guid } from './utils/uuid'
import { TodoContainer } from './App.style'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
    this.checkEverything = this.checkEverything.bind(this)
    this.getTodos = this.getTodos.bind(this)
    this.clearCompleted = this.clearCompleted.bind(this)
    this.renderFooter = this.renderFooter.bind(this)
    this.setVisibilityFilter = this.setVisibilityFilter.bind(this)
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
  renderFooter() {
    if(this.state.todos.length > 0){
      return (
        <Footer
        itemsLeft={this.state.todos.filter(todo => todo.isDone === false).length}
        clearCompleted={this.clearCompleted}
        setVisibilityFilter={this.setVisibilityFilter}
        visibilityFilter={this.state.visibilityFilter}
        />)
    }
    return null
  }

  getTodos(filter) {
    const todos = this.state.todos
    switch (filter) {
      case 'All':
        return todos
      case 'Active':
        return todos.filter(todo => todo.isDone === false)
      case 'Completed':
        return todos.filter(todo => todo.isDone === true)
      default:
      break;
    }
  }

  setVisibilityFilter(visibilityFilter) {
    this.setState({visibilityFilter})
  }

  render() {
    return (
      <MultiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React todo app</h1>
          </header>
          <TodoContainer>
            <NewTodo checkEverything={this.checkEverything} isEverythingChecked={this.state.isEverythingChecked} addTodo={this.addTodo} />
            <TodoList
              todos={this.getTodos(this.state.visibilityFilter)}
              deleteTodo={this.deleteTodo}
              toggleIsDone={this.toggleIsDone}
            />
            {this.renderFooter()}
          </TodoContainer>
        </div>
      </MultiThemeProvider>
    );
  }
}

export default App;
