import styled from "styled-components";
import { RiCloseCircleFill } from "react-icons/ri";

const AddItem = ({ addItem, setAddItem }) => {

    return (
        <Container>
            <div className="close" onClick={() => { setAddItem(!addItem) }}>
                <RiCloseCircleFill className="icon" />
            </div>x
            <input type="text" placeholder="Nombre: " name="name" />

            <textarea type="text" placeholder="Descripción: " />


            <select name="size" id="size">
                <option value="XL">XL</option>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="S">S</option>
            </select>

            <input type="number" placeholder="Precio: " name="price" />

            <button type="submit">Crear</button>

        </Container >
    )
}

const Container = styled.form`
display: flex;
flex-direction: column;
max-width: 450px;
gap: 15px;
padding: 15px;



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
