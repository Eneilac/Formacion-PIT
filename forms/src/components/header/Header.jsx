import { Link } from "react-router-dom"
import './header.css'
import { BASE_PATH, LOGIN, USER } from "../../constants/paths"
import { useAuth } from "../../contexts/AuthContext";
import { jwtDecode } from "jwt-decode";


function Header() {

    const { isLoggedIn, logout } = useAuth();
    let username = null;
    if (isLoggedIn) {
        username = jwtDecode(localStorage.getItem('accessToken')).sub
    }


    return (
        <nav className="header">
            <div className="logo">
                <Link to={BASE_PATH}>
                    <img src="/assets/images/header/spherelogo.png" alt="logo" />
                </Link>
            </div>
            <div className="enlaces">
                {username ? <div>Bienvenido {username}</div> : null}
                {isLoggedIn ? <div><Link to={USER}>Gestión</Link></div> : null}
                {!isLoggedIn ? <div><Link to={LOGIN}>Iniciar sesion</Link></div> : null}
                {isLoggedIn ? <div><Link to={BASE_PATH} onClick={logout}>Cerrar sesion</Link></div> : null}
            </div>
        </nav>
    )

}


export default Header