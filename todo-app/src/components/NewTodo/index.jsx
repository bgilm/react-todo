import React, { Component } from 'react';
import PropTypes from 'prop-types'

class NewTodo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todo:''
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addTodo(this.state.todo)
    this.setState({
      todo: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          placeholder="What needs to be done?"
          value={this.state.todo}
          onChange={(event) => this.setState({ todo: event.target.value })}
        >
        </input>
      </form>
    );
  }
}

NewTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}



export default NewTodo;
