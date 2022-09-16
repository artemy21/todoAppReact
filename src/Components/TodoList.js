import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, completeTodo, removeTodo, updateTodo }) {
    return todos.map((todo) =>
        <TodoItem
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo} />
    );
}

export default TodoList;