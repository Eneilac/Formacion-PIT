import { useState } from "react";
import icons from "../utils/icons";
import styled from "styled-components";


const Card = ({ item, setNumItems, numItems, handleDelete, submit }) => {
  const [isClicked, setIsClicked] = useState(false);





  return (
    <Container className={isClicked ? 'click' : ''}>
      <div className={`main ${isClicked ? 'clicked' : ''}`} onClick={() => setIsClicked(!isClicked)}>
        <div className={`card ${isClicked ? 'clicked' : ''}`}>
          <div className="heading">{item.name}</div>
          <div className="details">{item.description}</div>
          <div className="price">{item.price} €</div>
          <button className="btn1" onClick={() => {
            submit(
              {
              i: item,
              q: '/carts/item'
            })
            setNumItems(numItems + 1)
          }}>Añadir al carrito</button>
          <button className='trash btn2' onClick={() => { handleDelete(item.id) }}>
            {<icons.trashIcon />}
          </button>
        </div>

        <div className={`content__image ${isClicked ? 'clicked' : ''}`}>
          <img className="producto__imagen" src={item.image_url} alt="imagen camisa" />
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

&.click{
  margin-bottom: 100px;
  transition: all ease 0.5s;
}

.trash {
  padding: 3px;
  color: #000000;
  background-color: transparent;
  border: none;
  width: 15px;
  height: 10px;
}

/* Tarjeta nueva */
.card {
  top: 2em;
  width: 12.5em;
  height: 7.5em;
  background: #e6e6e668;
  transition: .4s ease-in-out;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 25px;
  backdrop-filter: blur(200px); 
  cursor: pointer;


}

.heading {
  color: black;
  font-weight: bold;
  font-size: 1.1em;
  transition: .4s ease-in-out;
}

.details {
  color: black;
  font-size: 1em;
  transition: .4s ease-in-out;
}

.price {
  color: black;
  font-weight: bold;
  font-size: 2em;
  top: 15px;
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
  top: 5.7em;
  width: 240px;
  transition: .4s ease-in-out;
  font-weight: bold;
  opacity: 0;
  cursor: pointer;
}



.clicked .btn2, .clicked .btn1 {
  opacity: 1;
}

.btn2 {
  position: relative;
  border: none;
  outline: none;
  background-color: black;
  color: white;
  border-radius: 10px;
  top:60px;
  width: 40px;
  height: 40px;
  transition: .4s ease-in-out;
  font-weight: bold;
  opacity: 0;
}

.btn2:hover {
  background-color: limegreen;
  cursor: pointer;
}

.content__image{
  position: relative;
  top: -160px;
  left: 160px;
  width: 100px;
}

.producto__imagen {
  width:  100%;
  transition: .4s ease-in-out;
  background: transparent;
}

.clicked {
  width: 400px;
  height: 400px;
}

div.clicked.content__image {
  transform: rotateX(360deg);
  height: 200px;
  width: 200px;
  left: 12em;
  top: -350px;
  transition: none;
}

.clicked .heading{
  position: relative;
  top: -20px;
  left: -100px;
  font-size: 50px;
}

.clicked .details, .clicked .price{
  position: relative;
  left: -100px;
  font-size: 20px;
  top: -25px;
}


`
export default Card

