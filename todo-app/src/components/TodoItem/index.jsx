import React from 'react';
import {
  StyledSpan,
  TodoWrapper
 } from './TodoItem.style'
 import {
   StyledCheckbox
 } from '../NewTodo/NewTodo.style'

const TodoItem = ({id, value, isDone, deleteTodo, toggleIsDone}) => {
  return (
    <div className="collection-item">
      <TodoWrapper>
        <StyledCheckbox checked={isDone} onClick={() => toggleIsDone(id)}/>
        <StyledSpan isDone={isDone}>
         {value}
        </StyledSpan>
      </TodoWrapper>
      <i className="material-icons right" onClick={() => deleteTodo(id)}>
        delete
      </i>
    </div>
  )
}

export default TodoItem;
