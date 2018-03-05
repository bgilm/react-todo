import React from 'react';

const TodoItem = ({id, value, deleteTodo, toggleIsDone}) => {
  return (
    <div>
      <span onClick={() => toggleIsDone(id)}>
       {value}
      </span>
      <i onClick={() => deleteTodo(id)}>
        delete
      </i>
    </div>
  )
}

export default TodoItem;
