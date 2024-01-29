import { Link, useNavigate } from "react-router-dom"
import './header.css'
import { BASE_PATH, LOGIN, USER } from "../../constants/paths"
import { jwtDecode } from "jwt-decode";
import React, { useState, useEffect } from "react";
import { logout } from "../../services/auth";
import { connect } from "react-redux";
import { loginActionRequestSuccess } from "../../redux/actions/login.actions";



function Header(props) {
    const [username, setUsername] = useState('');
    const [logged, setLogged] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('accessToken') !== null) {
            props.onLoadLoginSuccess(localStorage.getItem('accessToken'))
            setUsername(jwtDecode(localStorage.getItem('accessToken')).sub);
            setLogged(true)
        } else {
            navigate('/login')
        }
    }, [logged, props, navigate]);

    useEffect (() => {
        console.log(props.accessToken)
    },[props.accessToken])

    return (
        <nav className="header">
            <div className="logo">
                <Link to={BASE_PATH}>
                    <img src="/assets/images/header/spherelogo.png" alt="logo" />
                </Link>
            </div>
            <div className="enlaces">
                {username ? <div>Bienvenido {username}</div> : null}
                {logged ? <div><Link to={USER}>Gestión</Link></div> : null}
                {!logged ? <div><Link to={LOGIN}>Iniciar sesion</Link></div> : null}
                {logged ? <div><Link to={BASE_PATH} onClick={() => logout()}>Cerrar sesión</Link></div> : null}            </div>
        </nav>
    )

}


const mapStateToProps = (state) => {
    const loginState = state.login || {};

    return {
        isLoggedIn: loginState.isLoggedIn || false,
        user: loginState.user || null,
        error: loginState.error || null,
    };
};


const mapDispatchToProps = (dispatch) => ({
    onLoadLoginSuccess: (accessToken) => dispatch(loginActionRequestSuccess(accessToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);