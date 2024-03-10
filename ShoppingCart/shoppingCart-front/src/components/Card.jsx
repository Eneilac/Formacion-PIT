import icons from "../utils/icons";
import styled from "styled-components";


const Card = ({ item, setNumItems, numItems, handleDelete }) => {

  return (
    <Container>

      <div className="main">
        <div className="card">
          <div className="heading">{item.name}</div>
          <div className="details">{item.description}</div>
          <div className="price">{item.price} €</div>
          <button className="btn1" onClick={() => { setNumItems(numItems + 1) }}>Añadir al carrito</button>
          <button className="trash btn2" onClick={() => { handleDelete(item.id) }}><icons.trashIcon /></button>

        </div>

        <div className="image">
          <img className="producto__imagen image" src={item.image_url} alt="imagen camisa" />
        </div>
      </div>








    </Container>
  )
}

const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



.trash{
  cursor: pointer;
  padding: 3px;
  color: #000000;
  background-color: transparent;
  border: none;
}




///tarjeta nueva 

.card {
  position: relative;
  top: 2em;
  width: 12.5em;
  height: 7.5em;
  background: white;
  transition: .4s ease-in-out;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
  overflow: hidden;
}

.heading {
  position: relative;
  color: black;
  font-weight: bold;
  font-size: 1.1em;
  padding-top: 1em;
  padding-left: 1em;
  transition: .4s ease-in-out;
}

.details {
  position: relative;
  color: black;
  font-size: 0.6em;
  padding-top: 1.5em;
  padding-left: 2em;
  transition: .4s ease-in-out;
}

.price {
  position: relative;
  color: black;
  font-weight: bold;
  font-size: 0.8em;
  padding-top: 1.5em;
  padding-left: 1.5em;
  top: 9.6em;
  left: 5em;
  transition: .4s ease-in-out;
}

.btn1 {
  position: relative;
  border: none;
  outline: none;
  background-color: black;
  color: white;
  font-size: 0.6em;
  padding-left: 6.9em;
  padding-right: 6.9em;
  padding-top: 0.8em;
  padding-bottom: 0.85em;
  border-radius: 10px;
  left: 2.6em;
  top: 14.8em;
  transition: .4s ease-in-out;
  font-weight: bold;
}

.btn1:hover {
  background-color: limegreen;
  cursor: pointer;
}

.btn2 {
  position: relative;
  border: none;
  outline: none;
  background-color: black;
  color: white;
  font-size: 0.6em;
  padding-left: 5.1em;
  padding-right: 5.1em;
  padding-top: 0.8em;
  padding-bottom: 0.85em;
  border-radius: 10px;
  left: 2.6em;
  top: 15.5em;
  transition: .4s ease-in-out;
  font-weight: bold;
}

.btn2:hover {
  background-color: limegreen;
  cursor: pointer;
}

.image {
  position: relative;
  top: -4em;
  left: 4.5em;
  width: 100px;
  height: 100px;
  transition: .4s ease-in-out;
  background: transparent;
}

.card:hover {
  width: 12.5em;
  height: 23em;
  transform: translateY(1.25em);
}

.card:hover + .image {
  transform: rotateX(360deg);
  height: 100px;
  width: 100px;
  left: 3em;
  top: -18em;
}

.card:hover .heading {
  transform: translateY(7em) translateX(2.3em);
}

.card:hover .details {
  transform: translateY(13em) translateX(3.5em);
}




`
export default Card

export const icon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>

}
