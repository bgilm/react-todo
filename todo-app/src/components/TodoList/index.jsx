import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from '../TodoItem'
import { StyledList } from './TodoList.style'

const TodoList = ({todos, deleteTodo, toggleIsDone}) => {
  return <StyledList className="collection">
    {
      todos.map((todo) => {
        return <TodoItem key={todo.id} deleteTodo={deleteTodo} toggleIsDone={toggleIsDone} {...todo}/>
      })
    }
  </StyledList>
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired
  })).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleIsDone: PropTypes.func.isRequired
}

export default TodoList;
