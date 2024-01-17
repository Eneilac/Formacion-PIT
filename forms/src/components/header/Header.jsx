import { Link } from "react-router-dom"
import './header.css'
import { BASE_PATH, LOGIN, USER } from "../../constants/paths"
import { useAuth } from "../../contexts/AuthContext";


function Header() {

    const { isLoggedIn } = useAuth();


    return (
        <nav className="header">
            <div className="logo">
                <Link to={BASE_PATH}>
                    <img src="/assets/images/header/spherelogo.png" alt="logo" />
                </Link>
            </div>
            <div className="enlaces">
                {isLoggedIn ? <div><Link to={USER}>Gestión</Link></div> : null}
                <div><Link to={LOGIN}>Iniciar sesion</Link></div>
            </div>
        </nav>
    )

}


export default Header