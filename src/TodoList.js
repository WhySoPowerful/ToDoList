import React, { useState, useEffect } from 'react';
import api from './api';
import Login from './Login';
import './myParagraph.css';

const TodoList = () => {
    const [user, setUser] = useState(null);
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleLogin = (loggedInUser) => {
        setUser(loggedInUser);
    };

    const fetchTodos = async () => {
        const response = await api.get('/api/todos');
        setTodos(response.data);
    };

    const addTodo = async () => {
        if (!input.trim()) return;

        const newTodo = { task: input, completed: false };
        const response = await api.post('/api/todos', newTodo);
        setTodos([...todos, response.data]);
        setInput('');
    };
    const updateTodo = async (id, completed) => {
        const updatedTodo = await api.put(`/api/todos/${id}`, {
            completed: !completed,
        });
        setTodos(
            todos.map((todo) => (todo._id === id ? updatedTodo.data : todo))
        );
    };

    const deleteTodo = async (id) => {
        await api.delete(`/api/todos/${id}`);
        setTodos(todos.filter((todo) => todo._id !== id));
    };

    if (!user) {
        return <Login onLogin={handleLogin} />;
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input
                className="new-task"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a new task"
            />
            <button className="add-btn" onClick={addTodo}>
                Add
            </button>
            <div className="App-list">
                {todos.map((todo) => (
                    <div className="flex-row" key={todo._id}>
                        <input
                            type="checkbox"
                            className="checkbox"
                            checked={todo.completed}
                            onChange={() =>
                                updateTodo(todo._id, todo.completed)
                            }
                        />
                        <span className="task">{todo.task}</span>
                        <button
                            className="todo-delete-button"
                            onClick={() => deleteTodo(todo._id)}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
