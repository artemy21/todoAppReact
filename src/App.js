import React, { useState } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text) {
      return;
    }

    setTodos([...todos, todo]);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className='todo-app'>
      <div className='todo-form'>
        <h1>Task Form</h1>
        <TodoForm onSubmit={addTodo} />
      </div>
      <div className='todo-list'>
        <h1>Task List</h1>
        <TodoList
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo} />
      </div>
    </div>
  );
}

export default App;