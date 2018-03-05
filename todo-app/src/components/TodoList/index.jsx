import React from 'react';
import TodoItem from '../TodoItem'

const TodoList = ({todos, deleteTodo, toggleIsDone}) => {
  return <ul>
    {
      todos.map((todo) => {
        return <TodoItem key={todo.id} deleteTodo={deleteTodo} toggleIsDone={toggleIsDone} {...todo}/>
      })
    }
  </ul>
}

export default TodoList;
