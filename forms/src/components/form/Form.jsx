import './form.css'
import React, { useState } from "react";

function Form({ handleSubmit, profiles, setProfiles }) {
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

    const submit = (e) => {
        e.preventDefault();
        const newProfiles = [...profiles];
        newProfiles.push(formData);
        setProfiles(newProfiles);
        handleSubmit(formData);
    };

    return (
        <div className="container-form">
            <form onSubmit={submit}>
                <label htmlFor="username">Nombre:</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Nombre"
                    onChange={handleChange}
                    value={formData.name}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    required
                />


                <label htmlFor="mail">Email:</label>
                <input
                    type="email"
                    name="mail"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.mail}
                    required
                />


                <button type="submit">Aceptar</button>
            </form>
        </div>
    );
}

export default Form;
