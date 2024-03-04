import styled from "styled-components";


const Card = ({ item, setNumItems, numItems }) => {

  return (
    <Container>
      <div className="producto">
        <img className="producto__imagen" src={item.image_url} alt="imagen camisa" />
        <div className="producto__informacion">
          <p className="producto__nombre">{item.name}</p>
          <p className="producto__precio">{item.price} €</p>
        </div>
        <button className="button" onClick={() => { setNumItems(numItems + 1) }}>Añadir al carrito</button>
      </div>
    </Container>
  )
}

const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



--primario: #cd71dd;
--primarioOscuro: #367aab;
--secundario: #FFCE00;
--secundarioOscuro: rgb(233,287,2);
--blanco: #FFF;
--negro: #000;

--fuentePrincipal: 'Staatliches', cursive;




.producto{
    background-color: var(--primarioOscuro);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 15px;


}

.producto__imagen{
  border-radius: 15px;
}


.producto__nombre{
    font-size: 1.5rem;
}

.button{
margin: auto;
border-radius: 4px;
background-color: #000;
color: #FFF;
padding: 5px;

}

.producto__precio{
    font-size: 1.1rem;
    color: var(--secundario);
}

.producto__nombre,
.producto__precio {
    font-family: var(--fuentePrincipal);
    margin: 1rem 0;
    text-align: center;
    line-height: 1.2;
}


`
export default Card

export const icon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>

}
