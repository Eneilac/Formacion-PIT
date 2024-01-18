import { createContext, useContext, useState } from 'react';

//crear el contexto
const AuthContext = createContext();

//funciones del contexto
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const login = () => {
        setLoggedIn(true);
    };

    const logout = () => {
        setLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

//sirve el contexto
export const useAuth = () => useContext(AuthContext);
