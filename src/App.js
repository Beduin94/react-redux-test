import React from 'react';
import './App.css';
import CreateTodo from "./components/CreateTodo";
import TodosList from "./components/TodosList";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="app-container">
      <CreateTodo/>
      <Filter/>
      <TodosList/>
    </div>
  );
}

export default App;
