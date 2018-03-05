import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  StyledForm,
  StyledCheckbox,
  StyledInput
} from './NewTodo.style'

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
      <StyledForm onSubmit={this.handleSubmit.bind(this)}>
        <StyledCheckbox
          onClick={() => this.props.checkEverything()}
          checked={this.props.isEverythingChecked}
        />
        <StyledInput
          placeholder="What needs to be done?"
          value={this.state.todo}
          type="text"
          onChange={(event) => this.setState({ todo: event.target.value })}
        />
      </StyledForm>
    );
  }
}

NewTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}



export default NewTodo;
