import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import './App.css';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos, 
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }


  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    );
  }

  return (
    <div className="App">
      <div className="TodoWrapper">
        <Header />
        <ToDoForm addTodo={addTodo} />
        <ToDoList 
          todos={todos}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
}

export default App;