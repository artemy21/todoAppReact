import React, { useState } from 'react';
import useCollapse from 'react-collapsed';
import { BsArrowsCollapse } from 'react-icons/bs';
import { BsArrowsExpand } from 'react-icons/bs';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';

function TodoItem({ todo, completeTodo, removeTodo, updateTodo }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        url: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: '',
            url: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return (
        <div className='flex-row'>
            <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
                <div className="header">
                    {todo.text}
                </div>
                <div className='icons'>
                    <div {...getToggleProps()}>
                        {isExpanded ? <BsArrowsCollapse /> : <BsArrowsExpand />}
                    </div>
                    <input type="checkbox" className='doneCB' onClick={() => completeTodo(todo.id)}></input>
                    <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text, url: todo.image })} className="edit-icon" />
                    <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon" />
                </div>
            </div>
            <div className='collapseDiv' {...getCollapseProps()}>
                <img src={todo.image} className={todo.isComplete ? 'todo-img complete' : 'todo-img'}></img>
            </div>
        </div>
    );
}

export default TodoItem;