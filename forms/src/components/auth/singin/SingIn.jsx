import React, { useState } from "react"
import { Link } from "react-router-dom"
import './singin.css'
import { LOGIN } from "../../../constants/paths"
import { get, post } from "../../../services/request"
import { toast } from "react-toastify"
import CryptoJS from "crypto-js"
import Hex from "crypto-js/enc-hex"


const SingIn = () => {

    //const [errors, setErrors] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        apellidos: "",
        correo: "",
        correo2: "",
        password: "",
        password2: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Actualiza el estado del formulario al cambiar los campos
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = (e) => {   
        //TODO hacer validaciones
        e.preventDefault();
        const hexEnc = Hex.stringify(CryptoJS.SHA256(formData.password + '-.@#'));


        let newData = {
            username: formData.nombre,
            mail: formData.correo,
            password: hexEnc 
        }



        post('/users', newData).then(response => {
            if (!response.ok) {
                throw new Error(`Error al hacer la solicitud: ${response.statusText}`);
            }
            return response.json();
        }).then(() => {
            toast.success("Usuario creado")

            get('/users')
                .then(response => response.json())
                .catch(error => {
                    console.error(error);
                    toast.error('Error al traer los usuarios');
                    // Manejar el error según sea necesario
                });

        }).catch(error => {
            console.error('Error al hacer la solicitud:', error);
            toast.error("Error al añadir un usuario");
            throw error;
        })
    }


    return (
        <form className="form" onSubmit={handleSubmit}>
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