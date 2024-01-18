import React, { useState } from "react"
import { Link } from "react-router-dom"
import './singin.css'
import { LOGIN } from "../../../constants/paths"

const SingIn = () => {

    const [errors, setErrors] = useState(false);

    const [formData, setFormData] = useState({
        nombre: "",
        apellidos:"",
        correo:"",
        correo2:"",
        password: "",
        password2:""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Actualiza el estado del formulario al cambiar los campos
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const submit = (e) => {
        e.preventDefault();


        

    };



    return (
        <form className="form" onSubmit={submit}>
            <p className="title">Registro </p>
            <p className="message">Un paso mas cerca del futuro </p>
            <div className="flex">
                <label>
                    <input

                        required
                        placeholder="Nombre"
                        type="text"
                        className="input"
                        name="nombre"
                        onChange={handleChange}
                    />

                </label>

                <label>
                    <input
                        required
                        placeholder="Apellidos"
                        type="text"
                        className="input"
                        name="apellidos"
                        onChange={handleChange}

                    />
                </label>
            </div>

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
                    placeholder="Confirmar Correo"
                    type="email"
                    className="input"
                    name="correo2"
                    onChange={handleChange}

                />
            </label>


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
            </label>
            <button className="submit">Aceptar</button>
            <p className="signin">¿Ya tienes una cuenta? <Link to={LOGIN}>Iniciar sesion</Link> </p>
        </form>
    )
}

export default SingIn;