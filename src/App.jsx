import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import './App.css';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  // Add Todo 
  const addTodo = (todo) => {
    setTodos([
      ...todos, 
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  // Delete Todo 
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // Toggle Complete Todo 
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    );
  }

  // Toggle Edit Mode
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)
    );
  }

  // Edit Task Text 
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)
    );
  }

  return (
    <div className="App">
      <div className="TodoWrapper">
        <Header />
        <ToDoForm addTodo={addTodo} />
        <ToDoList 
          todos={todos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          editTask={editTask}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
}

export default App;