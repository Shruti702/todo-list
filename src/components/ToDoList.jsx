import React from 'react';
import ToDoItem from './ToDoItem';
import EditToDoForm from './EditToDoForm';

function ToDoList({ todos, deleteTodo, editTodo, editTask, toggleComplete }) {
  return (
    <div className="to-do-list">
      {todos.map((todo) => (
        todo.isEditing ? (
          <EditToDoForm 
            key={todo.id} 
            editTodo={editTask} 
            task={todo} 
          />
        ) : (
          <ToDoItem 
            key={todo.id} 
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      ))}
    </div>
  );
}

export default ToDoList;