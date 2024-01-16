import './Card.css'
import { Pencil, Trash } from '../../constants/icons'
import { useState } from 'react';
import { patch } from '../../services/request';
import { toast } from 'react-toastify';

function Card({ usernameFormated, handleDelete, setProfiles, profiles, user }) {


    const [isEditing, setIsEditing] = useState(false);
    const [editedUsername, setUsername] = useState(user.username);

    const handleClickEdit = () => {
        setIsEditing(!isEditing);
    }

    /* TODO:Arreglar, si edito 2 veces seguidas el mismo componente la id llega undefined */
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setIsEditing(false);
            try {

                patch(`/users`, { id: user.id, username: editedUsername })

                    .then(() => {
                        const index = profiles.findIndex(profile => profile.id === user.id);
                        if (index !== -1) {
                            const newProfiles = [...profiles];
                            newProfiles[index] = {
                                username: editedUsername,
                                mail: newProfiles[index].mail,
                                password: newProfiles[index].password
                            };
                            toast.success("editado")
                            setProfiles(newProfiles);
                        }
                    });
            } catch (error) {
                console.error('Error al enviar solicitud PATCH:', error);
            }
        }
    };




    return (
        <div className="cards">
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
                                    onChange={(e) => setUsername(e.target.value)}
                                    onKeyUp={handleKeyPress}
                                />
                            </>
                        ) : (
                            // En modo de visualización, mostrar el username normal.
                            <>
                                <strong>{user.username}</strong>
                                <span>{usernameFormated}</span>
                            </>
                        )}
                    </div>
                </header>

                <aside>
                    <div onClick={() => handleDelete(user.id)} className='icon'>
                        <Trash />
                    </div>
                    <div className='icon' onClick={() => handleClickEdit()}>
                        <Pencil />
                    </div>
                </aside>
            </article>
        </div>
    )
}

export default Card;