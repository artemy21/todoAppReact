import React, { useState } from 'react';

let newID = 0;

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const [url, setUrl] = useState(props.edit ? props.edit.url : '');

    const handleInputChange = e => {
        setInput(e.target.value);
    };

    const handleUrlChange = e => {
        setUrl(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: ++newID,
            text: input,
            image: url
        });
        setInput('');
        setUrl('');
    };

    return (
        <form onSubmit={handleSubmit}>
            {props.edit ?
                (
                    <>
                        <div className='editDiv'>
                            <input
                                type="text"
                                placeholder="update item"
                                value={input}
                                name="text"
                                className="todo-input edit"
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="url"
                                placeholder='update image url'
                                value={url}
                                name="url"
                                className="todo-input edit"
                                onChange={handleUrlChange}
                                required>
                            </input>
                            <div><button className="todo-button edit">Update</button></div>
                        </div>
                    </>
                )
                :
                (
                    <>
                        <input
                            type="text"
                            placeholder='task'
                            onChange={handleInputChange}
                            value={input}
                            className="todo-input"
                            required>
                        </input>
                        <input
                            type="url"
                            placeholder='image url'
                            onChange={handleUrlChange}
                            value={url}
                            className="todo-input"
                            required>
                        </input>
                        <div><button type="submit" className="todo-button">add new task</button></div>
                    </>
                )}
        </form>
    );
}

export default TodoForm;