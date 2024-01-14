import './Card.css'
import { Pencil, Trash } from '../../constants/icons'
import { useState } from 'react';
function Card({ username, usernameFormated, id, handleDelete }) {


    const { isEditing, setIsEditing } = useState(false);
    const [editedUsername, setEditedUsername] = useState(username);


    const handleClickEdit = () => {
        setIsEditing(true);
    }

    const handleAcceptClick = () => {
        // Aquí podrías realizar alguna lógica adicional antes de aceptar los cambios.
        // Por ejemplo, validar que el nuevo username sea válido.

        // Luego, actualizas el username con el valor editado y desactivas el modo de edición.
        setUsername(editedUsername);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        // Si el usuario cancela la edición, simplemente desactivamos el modo de edición.
        setIsEditing(false);
    };



    return (
        <div className="card">
            <article>
                <header>
                    <img src='./assets/images/user.png' alt='imagen perfil' />
                    <div>
                        {isEditing ? (
                            // En modo de edición, mostrar un input para editar el username.
                            <>
                                <input
                                    type="text"
                                    value={editedUsername}
                                    onChange={(e) => setEditedUsername(e.target.value)}
                                />
                                <button onClick={handleAcceptClick}>Aceptar</button>
                                <button onClick={handleCancelClick}>Cancelar</button>
                            </>
                        ) : (
                            // En modo de visualización, mostrar el username normal.
                            <>
                                <strong>{username}</strong>
                                <span>{usernameFormated}</span>
                            </>
                        )}
                    </div>
                </header>

                <aside>
                    <div onClick={() => handleDelete(id)} className='icon'>
                        <Trash />
                    </div>
                    <div className='icon' onClick={() => handleClickEdit}>
                        <Pencil />
                    </div>
                </aside>
            </article>
        </div>
    )
}

export default Card;