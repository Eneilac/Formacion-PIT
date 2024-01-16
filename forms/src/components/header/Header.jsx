import { Link } from "react-router-dom"
import React from "react"
import './header.css'
import { BASE_PATH, LOGIN, REGISTER, USER } from "../../constants/paths"

function Header() {

    return (
        <nav>
            <div className="logo">
                <Link to={BASE_PATH}>
                    <img src="/assets/images/header/spherelogo.png" alt="logo" />
                </Link>
            </div>
            <div className="enlaces">
                <div><Link to={USER}>Gestión</Link></div>
                <div><Link to={LOGIN}>Iniciar sesion</Link></div>
                <div><Link to={REGISTER}>Registro</Link></div>
            </div>
        </nav>
    )

}



export default Header