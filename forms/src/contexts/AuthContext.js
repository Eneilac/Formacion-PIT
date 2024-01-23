import { createContext, useContext, useEffect, useState } from 'react';
import { checkToken } from '../services/request';
import { BASE_URL } from '../constants/constants';



//crear el contexto
const AuthContext = createContext();

//funciones del contexto
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [errors, setErrors] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            setLoggedIn(true)
        }
    },[])




    async function login(name, pass) {
        //Preguntar por que no puedo almacenar las credenciales en estados 
        const credentials = {
            username: name,
            password: pass
        }

        try {
            const response = await checkToken(`${BASE_URL}/auth/login`, credentials);

            if (response.ok) {
                const accessToken = await response.text();
                // Guardar el token de manera segura en localStorage
                localStorage.setItem('accessToken', accessToken);

                setLoggedIn(true);
            } else {
                setErrors(true);
            }
        } catch (error) {
            console.error('Error al procesar la solicitud:', error);
            setErrors(true);
        }
    };



    const logout = () => {
        setLoggedIn(false);
        localStorage.removeItem('accessToken');
    };



    /**
     * Props de uso para el contexto 
     */
    const authContextValue = {
        isLoggedIn,
        setLoggedIn,
        errors,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

//sirve el contexto
export const useAuth = () => useContext(AuthContext);
