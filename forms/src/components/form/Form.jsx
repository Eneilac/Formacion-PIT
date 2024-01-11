import { post } from '../../services/request';
import './form.css'
import React, { useState } from "react";

function Form({ onSubmit }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        mail: ""
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
        e.preventDefault();
        console.log(formData);
        // Llama a la función onSubmit del padre y pasa los datos del formulario
        post('/users', formData)
    };

    return (
        <div className="container-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Nombre:</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Nombre"
                    onChange={handleChange}
                    value={formData.name}
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                />


                <label htmlFor="mail">Email:</label>
                <input
                    type="email"
                    name="mail"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.mail}
                />


                <button type="submit">Aceptar</button>
            </form>
        </div>
    );
}

export default Form;
