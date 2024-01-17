import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//crear el contexto
const AuthContext = createContext();

//funciones del contexto
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();  // no funciona

    const login = () => {
        setLoggedIn(true);
        navigate("/");
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
