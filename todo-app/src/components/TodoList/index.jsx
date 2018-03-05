import React from 'react';
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

export default TodoList;
