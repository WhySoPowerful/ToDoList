import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import TodoList from './TodoList';
import AboutUs from './AboutUs';
import SiteDescription from './SiteDescription';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main className="App-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/todo-list" element={<TodoList />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route
                            path="/site-description"
                            element={<SiteDescription />}
                        />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
