import { Link } from "react-router-dom"
import './header.css'
import { BASE_PATH, LOGIN, USER } from "../../constants/paths"
import { jwtDecode } from "jwt-decode";
import React, { useState, useEffect } from "react";
import { logout } from "../../services/auth";
import { connect } from "react-redux";
import { setLoggedIn } from "../../redux/actions/login.actions";


function Header(props) {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const userIsLoggedIn = props.isLoggedIn;
    
        if (!userIsLoggedIn && localStorage.getItem('accessToken')) {
          props.dispatch(setLoggedIn(true));
        }
    
        if (props.isLoggedIn) {
          setUsername(jwtDecode(localStorage.getItem('accessToken')).sub);
        }
      }, [props.isLoggedIn, props.dispatch]);

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
                {props.isLoggedIn ? <div><Link to={BASE_PATH} onClick={() => logout()}>Cerrar sesión</Link></div> : null}            </div>
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

export default connect(mapStateToProps)(Header);