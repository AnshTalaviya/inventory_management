import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    const signup = (newUser) => {
        setUsers([...users, newUser]);
        localStorage.setItem('users', JSON.stringify([...users, newUser]));
    };

    const login = (email, password) => {
        const foundUser = users.find((u) => u.email === email && u.password === password);
        if (foundUser) {
            setUser(foundUser);
            localStorage.setItem('user', JSON.stringify(foundUser));
            return true;
        } else {
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };


    return (
        <AuthContext.Provider value={{ user, users, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
