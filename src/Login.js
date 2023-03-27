// src/Login.js
import React, { useState } from 'react';
import api from './api';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            if (isSignUp) {
                await api.post('/api/users/register', { username, password });
                setIsSignUp(false);
            } else {
                const response = await api.post('/api/users/login', {
                    username,
                    password,
                });
                onLogin(response.data);
            }
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred');
        }
    };

    return (
        <div>
            <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className="new-task"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    className="new-task"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button className="add-btn" type="submit">
                    {isSignUp ? 'Sign Up' : 'Login'}
                </button>
            </form>
            {error && <p className="error-message">{error}</p>}
            <p>
                {isSignUp
                    ? 'Already have an account?'
                    : "Don't have an account?"}
                <button
                    onClick={() => {
                        setError('');
                        setIsSignUp(!isSignUp);
                    }}
                    className="switch-auth-mode-button add-btn"
                >
                    {isSignUp ? 'Log In' : 'Sign Up'}
                </button>
            </p>
        </div>
    );
};

export default Login;
