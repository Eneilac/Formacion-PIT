import styled from "styled-components";
import { RiCloseCircleFill } from "react-icons/ri";
import { useState } from "react";

const AddItem = ({ toggle, setToggle, handleSubmit }) => {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        size: "XL",
        price: 0,
        image_url: '/img/porDefecto.png'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };



    return (
        <Container>
            <div className="close" onClick={() => { setToggle(!toggle) }}>
                <RiCloseCircleFill className="icon" />
            </div>
            <h2>Añadir un elemento</h2>
            <input type="text" placeholder="Nombre: " name="name"
                onChange={handleChange}
                required
            />

            <textarea type="text" placeholder="Descripción:" name="description"
                onChange={handleChange}
                required
            />

            <select name="size" id="size"
                onChange={handleChange}
                required
            >
                <option value="XL">XL</option>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="S">S</option>
            </select>

            <input type="number" placeholder="Precio: " name="price"
                onChange={handleChange}
                required
            />

            <button type="submit" onClick={() => {
                handleSubmit(formData)
                setToggle(!toggle)
            }}>Crear</button>
        </Container >
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    gap: 15px;
    padding: 15px;
    border-radius: 15px;


input{
    border-radius: 6px;
    border: none;
    padding: 2px;
}

input:focus,textarea:focus{
    outline: none;
}




.close{
    display: flex;
    align-self: flex-end;
    width: min-content;
    padding: 0px 2px;
    cursor: pointer;
    .icon{
        font-size: 30px;
    }
        color: #000000;
}
`
export default AddItem
