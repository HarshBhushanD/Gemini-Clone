// src/components/ProtectedRoute/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useAuth();
    
    if (!currentUser) {
        // Redirect to login if user is not authenticated
        return <Navigate to="/login" />;
    }
    
    return children;
};

export default ProtectedRoute;