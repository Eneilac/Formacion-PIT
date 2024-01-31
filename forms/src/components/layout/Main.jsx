    import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import './main.css';
//import Footer from "../footer/Footer";

function Main() {
    return (
        <section className="layout">
            <div className="header">
                <Header />
            </div>
            <div className="main">
                <Outlet />
            </div>
        </section>
    );
}

export default Main;
