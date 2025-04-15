// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
    onAuthStateChanged, 
    signOut as firebaseSignOut 
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sign out function
    function signOut() {
        return firebaseSignOut(auth);
    }

    // Listen for auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    // Context value
    const value = {
        currentUser,
        signOut
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}