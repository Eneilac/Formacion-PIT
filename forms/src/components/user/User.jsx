import { useEffect, useState } from "react";
import Card from "../Cards/Card";
import Form from "../form/Form"
import { del, get, post } from "../../services/request";
import { toast } from 'react-toastify';


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
                    toast.error('Error al traer los usuarios');
                    // Manejar el error según sea necesario
                });
        }
    }, [profiles]);


    const handleDelete = async (id) => {
        try {
            await del('/users/' + id).then(
                () => {
                    toast.success("Eliminado correctamente");
                    const newProfiles = profiles.filter(profile => profile.id !== id);
                    setProfiles(newProfiles);
                }
            );

        } catch (error) {
            console.error('Error al enviar solicitud DELETE:', error);
            toast.error('Error al borrar el usuario');

        }
    };

    const handleSubmit = (data) => {
        post('/users', data).then(response => {
            if (!response.ok) {
                throw new Error(`Error al hacer la solicitud: ${response.statusText}`);
            }
            return response.json();
        }).then(() => {
            toast.success("Usuario creado")
            
            get('/users')
                .then(response => response.json())
                .then(data => {
                    setProfiles(data);
                })
                .catch(error => {
                    console.error(error);
                    toast.error('Error al traer los usuarios');
                    // Manejar el error según sea necesario
                });

        }).catch(error => {
            console.error('Error al hacer la solicitud:', error);
            toast.error("Error al añadir un usuario");
            throw error;
        });


    }

    return (

        <>
            <div className="container">
                <section>
                    <Form
                        handleSubmit={handleSubmit}
                        profiles={profiles}
                        setProfiles={setProfiles}
                    />
                </section>

                <section>
                    {profiles &&
                        profiles.map((profile) =>
                            <Card
                                key={profile.id}
                                usernameFormated={format(profile.username)}
                                handleDelete={handleDelete}
                                setProfiles={setProfiles}
                                profiles={profiles}
                                user={profile}
                            />
                        )
                    }
                </section>
            </div>
        </>
    )
}