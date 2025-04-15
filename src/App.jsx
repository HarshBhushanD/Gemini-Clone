// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
// import Login from './components/Login/Login';
// import Signup from './components/Signup/Signup';
import Login from './components/login';
import Signup from './components/signup';
import Main from './components/Main/Main';
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ProtectedRoute from './components/Protectedroute/ProtectedRoute';
// import './App.css';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/" element={
                        <ProtectedRoute>
                            <Main />
                        </ProtectedRoute>
                    } />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;