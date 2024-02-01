import React, { useEffect, useState } from "react";
import './login.css'
import { APPLE_ICON, GOOGLE_ICON } from "../../../constants/icons"
import { Link } from "react-router-dom";
import { BASE_PATH, SINGIN } from "../../../constants/paths";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import Hex from "crypto-js/enc-hex";
import { connect } from "react-redux";
import { loginActionRequestStarted, } from "../../../redux/actions/login.actions";
import { getAccessToken } from "../../../redux/selectors/login.selector";





const Login = (props) => {
    //hooks 
    const [logged, setLogged] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        text: "",
        password: ""
    });



    useEffect(() => {
        if (props.isLoggedIn) {
            navigate(BASE_PATH);
            setLogged(true)
        }
    }, [logged, navigate, props]);


    const submit = (e) => {
        e.preventDefault();
        const hexEnc = Hex.stringify(CryptoJS.SHA256(formData.password + '-.@#'));
        const loginUser = {
            username: formData.text,
            password: hexEnc
        }

        props.onLoadLoginStarted(loginUser);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    return (
        <div className="formLogin-container">
            <p className="title">Bienvenido</p>

            <form className="formLogin" onSubmit={submit}>
                <input
                    type="text"
                    className={`input ${props.error ? 'error' : ''}`}
                    placeholder="Usuario"
                    name="text"
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    className={`input ${props.error ? 'error' : ''}`}
                    placeholder="Contraseña"
                    name="password"
                    onChange={handleChange}
                    required
                />
                {props.error && <p className="error-message">Uno de los campos introducidos no es correcto</p>}
                <p className="page-link">
                    <span className="page-link-label">He olvidado mi contraseña</span>
                </p>
                <button className="formLogin-btn">Iniciar sesión</button>
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



const mapStateToProps = (state) => ({
    accessToken: getAccessToken(state),
    isLoading: state.loginState.isLoading,
    isLoggedIn: state.loginState.isLoggedIn,
    error: state.loginState.error,
});


const mapDispatchToProps = (dispatch) => ({
    onLoadLoginStarted: (loginUser) => dispatch(loginActionRequestStarted(loginUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);