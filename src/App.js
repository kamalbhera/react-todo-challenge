import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}> 
        <input
          type="text"
          value={value}
          onChange={e => 
            setValue(e.target.value) 
          }
          placeholder="Add new todo"
        />
        <button type="submit">Submit</button>
      </form>
      {todos.map((todo, index) => (
        <p key={index}>{todo.text}</p>
      ))}
    </div>
  );
}

export default App;
