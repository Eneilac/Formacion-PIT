import { createContext, useContext, useState } from 'react';
import { checkToken } from '../services/request';
import { BASE_URL } from '../constants/constants';

//crear el contexto
const AuthContext = createContext();

//funciones del contexto
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);


    const login = async (user, pass) => {
        console.log(user + pass);

        //Preguntar por que no puedo almacenar las credenciales en estados 
        const credentials = {
            username: user,
            password: pass
        }


        try {
            const response = await checkToken(`${BASE_URL}/auth/login`, credentials);

            if (response.ok) {
                const data = await response.text();
                const accessToken = data;

                // El token de manera segura en localStorage
                localStorage.setItem('accessToken', accessToken);
                console.log('Token de acceso almacenado:', accessToken);

                setLoggedIn(true);
            } else {
                console.error('Error en el inicio de sesión:', response.statusText);
            }
        } catch (error) {
            console.error('Error al procesar la solicitud:', error);
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
        login,
        logout
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

//sirve el contexto
export const useAuth = () => useContext(AuthContext);
