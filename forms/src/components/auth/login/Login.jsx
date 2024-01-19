import React, { useState } from "react";
import './login.css'

import { APPLE_ICON, GOOGLE_ICON } from "../../../constants/icons"
import { Link } from "react-router-dom";
import { SINGIN } from "../../../constants/paths";
import { useAuth } from "../../../contexts/AuthContext";

const Login = () => {

    const { login } = useAuth();

    const [formData, setFormData] = useState({
        text: "",
        password: ""
    });

    const [errors, setErrors] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Actualiza el estado del formulario al cambiar los campos
        setFormData({
            ...formData,
            [name]: value
        });
    };

    //TODO hacer funcion he olvidado contraseña 
    const submit = (e) => {
        e.preventDefault();

        let user = formData.text;
        let pass = formData.password;


        login(user, pass)

    };

    return (
        <div className="form-container">
            <p className="title">Bienvenido</p>
            <form className="form" onSubmit={submit}>

                <input
                    type="text"
                    className={`input ${errors ? 'error' : ''}`}
                    placeholder="Usuario"
                    name="text"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    className={`input ${errors ? 'error' : ''}`}
                    placeholder="Contraseña"
                    name="password"
                    onChange={handleChange}
                />
                {errors && <p className="error-message">Uno de los campos introducidos no es correcto</p>}
                <p className="page-link">
                    <span className="page-link-label">He olvidado mi contraseña</span>
                </p>
                <button className="form-btn">Iniciar sesión</button>
            </form>
            <p className="sign-up-label">
                ¿No estas registrado? <span className="sign-up-link"><Link to={SINGIN}> Registrarse</Link></span>
            </p>
            <div className="buttons-container">
                <div className="apple-login-button">
                    {APPLE_ICON}
                    <span>Iniciar con Apple</span>
                </div>
                <div className="google-login-button">
                    {GOOGLE_ICON}
                    <span>Iniciar con Google</span>
                </div>
            </div>
        </div>
    );
}

export default Login;