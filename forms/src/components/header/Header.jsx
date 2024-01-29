import { Link, useNavigate } from "react-router-dom"
import './header.css'
import { BASE_PATH, LOGIN, USER } from "../../constants/paths"
import { jwtDecode } from "jwt-decode";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginActionRequestFailed, loginActionRequestStarted, loginActionRequestSuccess, logoutActionRequest } from "../../redux/actions/login.actions";
import { getAccessToken } from "../../redux/selectors/login.selector";
import { toast } from "react-toastify";



function Header(props) {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const onLogout = () => {
        toast.dark('!Hasta Pronto¡')
        props.onLoadLogout();
        localStorage.removeItem('accessToken')
    }

    useEffect(() => {
        if (localStorage.getItem('accessToken') !== null) {
            props.onLoadLoginSuccess(localStorage.getItem('accessToken'))
            setUsername(jwtDecode(localStorage.getItem('accessToken')).sub);
        } else {
            navigate('/login')
        }
    }, [navigate, props]);




    return (
        <nav className="header">
            <div className="logo">
                <Link to={BASE_PATH}>
                    <img src="/assets/images/header/spherelogo.png" alt="logo" />
                </Link>
            </div>
            <div className="enlaces">
                {username ? <div>Bienvenido {username}</div> : null}
                {props.isLoggedIn ? <div><Link to={USER}>Gestión</Link></div> : null}
                {!props.isLoggedIn ? <div><Link to={LOGIN}>Iniciar sesion</Link></div> : null}
                {props.isLoggedIn ? <div><Link to={BASE_PATH} onClick={onLogout} >Cerrar sesión</Link></div> : null}            </div>
        </nav>
    )

}


const mapStateToProps = (state) => ({
    user: getAccessToken(state),
    isLoggedIn: state.loginState.isLoggedIn,
    isLoading: state.loginState.isLoading,
    error: state.loginState.error,
});


const mapDispatchToProps = (dispatch) => ({
    onLoadLoginStarted: (loginUser) => dispatch(loginActionRequestStarted(loginUser)),
    onLoadLoginSuccess: (accessToken) => dispatch(loginActionRequestSuccess(accessToken)),
    onLoadLoginFailed: (error) => dispatch(loginActionRequestFailed(error)),
    onLoadLogout: () => dispatch(logoutActionRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);