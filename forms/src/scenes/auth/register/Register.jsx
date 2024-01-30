import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './register.css'
import { LOGIN } from "../../../constants/paths"
import { post } from "../../../services/request"
import { toast } from "react-toastify"
import CryptoJS from "crypto-js"
import Hex from "crypto-js/enc-hex"
import { PASSWORD_VALIDATE, USER_VALIDATE } from "../../../constants/constants"


const Register = () => {
    //*Hooks
    const [passErrors, setPassError] = useState(false);
    const [emailErrors, setEmailErrors] = useState(false);
    const [anyError, setAnyError] = useState(false);

    //TODO: Terminar las validaciones
    const [validUser, setValidUser] = useState(true);
    const [validPass, setValidPass] = useState(true);
  
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        correo2: "",
        password: "",
        password2: ""
    });

    useEffect(() => {
        checkPasswordsMatch(formData.password, formData.password2);
        checkEmailsMatch(formData.correo, formData.correo2);
    }, [formData.password, formData.password2, formData.correo, formData.correo2]);

    useEffect(() => {
        setAnyError(passErrors || emailErrors);
    }, [emailErrors, passErrors]);


    /**
     * * Actualiza los datos del formulario en tiempo real y hace comprobaciones de las contraseñas
     * @param {*} e 
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Actualiza el estado del formulario al cambiar los campos
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === 'password' || name === 'password2') {
            checkPasswordsMatch(formData.password, formData.password2);
        }



    };

    /**
     * *Funcion para validar que ambas contraseñas son iguales
     * @param {*} pass1 
     * @param {*} pass2 
     */
    const checkPasswordsMatch = (pass1, pass2) => {
        const passwordsMatch = pass1 === pass2;
        setPassError(!passwordsMatch);
    };

    /**
     * *Funcion para validar que ambos correos son iguales
     * @param {*} mail1 
     * @param {*} mail2 
     */
    const checkEmailsMatch = (mail1, mail2) => {
        const emailsMatch = mail1 === mail2;
        setEmailErrors(!emailsMatch);
    };


    /**
     * *Funcion para el submit del registro
     * @param {*} e 
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        const hexEnc = Hex.stringify(CryptoJS.SHA256(formData.password + '-.@#'));

        let newData = {
            username: formData.nombre,
            mail: formData.correo,
            password: hexEnc
        }

        //* Petición para registrar el usuario
        post('/users', newData).then(response => {
            if (!response.ok) {
                throw new Error(`Error al hacer la solicitud: ${response.statusText}`);
            }
            return response.json();
        }).then(() => {
            toast.info('¡Bienvenido ' + newData.username);
            navigate(LOGIN)
        }).catch(error => {
            console.error(error);
            toast.error("Error al registrarte, intentalo de nuevo mas tarde.");
            throw error;
        })
    }

    //* renderizado
    return (
        <form className="form" onSubmit={handleSubmit}>
            <p className="title">Registro </p>
            <p className="message">Un paso mas cerca del futuro </p>

            <label>
                <input
                    required
                    placeholder="Usuario"
                    type="text"
                    className="input"
                    name="nombre"
                    onChange={handleChange}
                    pattern={USER_VALIDATE}
                />

            </label>

            <label>
                <input
                    required
                    placeholder="Correo"
                    type="email"
                    className="input"
                    name="correo"
                    onChange={handleChange}

                />
            </label>

            <label>
                <input
                    required
                    placeholder="Confirmar correo"
                    type="email"
                    className="input"
                    name="correo2"
                    onChange={handleChange}
                />
            </label>
            {emailErrors ? <p className="error-text">Los correos no coinciden.</p> : null}
            <label>
                <input
                    required
                    placeholder="Contraseña"
                    type="password"
                    className="input"
                    name="password"
                    onChange={handleChange}
                    pattern={PASSWORD_VALIDATE}
                />
            </label>
            <label>
                <input
                    required
                    placeholder="Confirmar contraseña"
                    type="password"
                    className="input"
                    name="password2"
                    onChange={handleChange}
                    pattern={PASSWORD_VALIDATE}
                />
                {passErrors ? <p className="error-text">Las contraseñas no coinciden.</p> : null}

            </label>
            <button className={anyError ? 'submit anyError' : 'submit'} disabled={anyError} >Aceptar</button>
            <p className="signin">¿Ya tienes una cuenta? <Link to={LOGIN}>Iniciar sesion</Link> </p>
        </form>
    )
}

export default Register;