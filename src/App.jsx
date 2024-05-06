
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Dashboard from './components/dashboard';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="container">
                    <Sidebar />
                    <Routes>
                        <Route path="/" element={<Content />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        {/* Define more routes as needed */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
