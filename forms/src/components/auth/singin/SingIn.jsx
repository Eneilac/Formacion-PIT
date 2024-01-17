import React from "react"
import { Link } from "react-router-dom"
import './singin.css'

const SingIn = () => {

    return (

        <form class="form">
            <p class="title">Registro </p>
            <p class="message">Un paso mas cerca del futuro </p>
            <div class="flex">
                <label>
                    <input required="" placeholder="" type="text" class="input" />
                    <span>Nombre</span>
                </label>

                <label>
                    <input required="" placeholder="" type="text" class="input" />
                    <span>Apellidos</span>
                </label>
            </div>

            <label>
                <input required="" placeholder="" type="email" class="input" />
                <span>Email</span>
            </label>

            <label>
                <input required="" placeholder="" type="email" class="input" />
                <span> Confirmar email</span>
            </label>


            <label>
                <input required="" placeholder="" type="password" class="input" />
                <span>Contraseña</span>
            </label>
            <label>
                <input required="" placeholder="" type="password" class="input" />
                <span>Confirmar contraseña</span>
            </label>
            <button class="submit">Aceptar</button>
            <p class="signin">¿Ya tienes una cuenta? <Link>Iniciar sesion</Link> </p>
        </form>
    )
}

export default SingIn;