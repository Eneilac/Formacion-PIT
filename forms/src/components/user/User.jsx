import { useEffect, useState } from "react";
import Card from "../Cards/Card";
import Form from "../form/Form"
import { del, get, post } from "../../services/request";

export function User() {
    const format = (userName) => `@${userName}`; //funcion que formatea el texto
    const [profiles, setProfiles] = useState(null);


    /**
     * El hook realiza la peticion cuando el componente se monta.
     */
    useEffect(() => {
        if (profiles === null) {
            get('/users')
                .then(response => response.json())
                .then(data => {
                    setProfiles(data);
                })
                .catch(error => {
                    console.error(error);
                    // Manejar el error según sea necesario
                });
        }
    }, [profiles]);


    const handleDelete = async (id) => {
        try {
            await del('/users/' + id);
            const newProfiles = profiles.filter(profile => profile.id !== id);
            setProfiles(newProfiles);
        } catch (error) {
            console.error('Error al enviar solicitud DELETE:', error);
        }
    };

    const handleSubmit = () => {
        post()
    }

    return (

        <>
            <div className="container">
                <section>
                    <Form



                    />
                </section>

                <section>
                    {profiles &&
                        profiles.map((profile, index) =>
                            <Card
                                key={index}
                                username={profile.username}
                                usernameFormated={format(profile.username)}
                                id={profile.id}
                                handleDelete={handleDelete}
                                setProfiles={setProfiles}
                                profiles={profiles}
                            />
                        )
                    }
                </section>
            </div>
        </>
    )
}