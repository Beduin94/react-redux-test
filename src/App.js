import React from 'react';
import './App.css';
import CreateTodo from "./components/CreateTodo";
import TodosList from "./components/TodosList";

function App() {
  return (
    <div className="app-container">
      <CreateTodo/>
      <TodosList/>
    </div>
  );
}

export default App;
