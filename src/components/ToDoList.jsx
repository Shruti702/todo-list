import React from 'react';
import ToDoItem from './ToDoItem';
import EditToDoForm from './EditToDoForm';

function ToDoList({ todos, toggleComplete }) {
  return (
    <div className="to-do-list">
      {todos.map((todo) => (
        todo.isEditing ? (
          <EditToDoForm 
            key={todo.id}  
            task={todo} 
          />
        ) : (
          <ToDoItem 
            key={todo.id} 
            task={todo}
            toggleComplete={toggleComplete}
          />
        )
      ))}
    </div>
  );
}

export default ToDoList;