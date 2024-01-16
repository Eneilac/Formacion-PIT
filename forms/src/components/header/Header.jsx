import { Link } from "react-router-dom"
import React from "react"
import './header.css'
import { BASE_PATH, USER } from "../../constants/paths"

function Header() {

    return (
        <nav>
            <div className="logo">
                <img src="/assets/images/header/spherelogo.png" alt="logo" />
            </div>
            <div className="enlaces">
                <div><Link to={BASE_PATH}>Home</Link></div>
                <div><Link to={USER}>Usuarios</Link></div>
            </div>
        </nav>
    )

}



export default Header