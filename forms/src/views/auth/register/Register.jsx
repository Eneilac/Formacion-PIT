import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './register.css'
import { LOGIN } from "../../../constants/paths"
import { toast } from "react-toastify"
import CryptoJS from "crypto-js"
import Hex from "crypto-js/enc-hex"
import { connect } from "react-redux"
import { registerActionRequestStarted } from "../../../redux/actions/register.action"
//import { PASSWORD_VALIDATE, USER_VALIDATE } from "../../../constants/constants"


const Register = (props) => {
    //*Hooks
    const [passErrors, setPassError] = useState(false);
    const [emailErrors, setEmailErrors] = useState(false);
    const [anyError, setAnyError] = useState(false);

    //TODO: Terminar las validaciones
    //  const [validUser, setValidUser] = useState(true);
    // const [validPass, setValidPass] = useState(true);

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
        setAnyError(passErrors || emailErrors || props.error);
    }, [emailErrors, passErrors, props.error]);

    useEffect(() => {
        console.log(props.isRegisted)
        if (props.isRegisted) {
            navigate(LOGIN)
            toast.info('Usuario registrado con exito')
        } else if (props.error) {
            toast.error('Ha ocurrido un error con el registro')
        }
    }, [props.isRegisted])


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
        props.onLoadRegisterStarted(newData);
    }


    //* renderizado
    return (
        <form className="formRegister" onSubmit={handleSubmit}>
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
                />
                {passErrors ? <p className="error-text">Las contraseñas no coinciden.</p> : null}

            </label>
            <button className={anyError ? 'submit anyError' : 'submit'} >Aceptar</button>
            <p className="signin">¿Ya tienes una cuenta? <Link to={LOGIN}>Iniciar sesion</Link> </p>
        </form>
    )
}

const mapStateToProps = (state) => ({
    isLoading: state.registerState.isLoading,
    isRegisted: state.registerState.isRegisted,
    error: state.registerState.error,
});


const mapDispatchToProps = (dispatch) => ({
    onLoadRegisterStarted: (data) => dispatch(registerActionRequestStarted(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);