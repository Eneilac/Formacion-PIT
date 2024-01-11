import './Card.css'
import { Pencil, Trash } from '../../constants/icons'
function Card({username,usernameFormated, id, handleDelete}) {

    console.log("esta es la id : "+ id)
    return (
        <div className="card">
            <article>
                <header>
                    <img src='./assets/images/user.png' alt='imagen perfil' />
                    <div>
                        <strong>{username}</strong>
                        <span>{usernameFormated}</span>
                    </div>
                </header>

                <aside>
                    <div onClick={() => handleDelete(id)} className='icon'>
                        <Trash />
                    </div>
                    <div className='icon'>
                        <Pencil />
                    </div>
                </aside>
            </article>
        </div>
    )
}

export default Card;