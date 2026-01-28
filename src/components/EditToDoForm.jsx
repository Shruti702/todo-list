import React, { useState } from 'react';

function EditToDoForm({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      editTodo(value, task.id);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input 
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update Task..." 
      />
      <button type="submit" className="todo-btn">Update</button>
    </form>
  );
}

export default EditToDoForm;