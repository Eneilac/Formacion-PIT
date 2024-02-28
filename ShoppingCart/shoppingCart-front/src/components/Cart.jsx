import styled from "styled-components";
import { RiMoneyEuroCircleLine } from "react-icons/ri";


const Cart = () => {

    return (
        <Container>
            <div className="title">
                <h2>Carrito de compra</h2>
            </div>

            <div className="bodyCart">
                <p>Producto x 4</p>
                <p>Producto x 2</p>
            </div>
            <div className="total">
                <p>Total: 45€</p>
            </div>

            <button className="buttonCartBuy">Pagar <RiMoneyEuroCircleLine />
            </button>
        </Container>
    )
}

const Container = styled.div`
background-color: #fff;
padding: 15px;
display: flex;
flex-direction: column;
border-radius: 10px;
width: 400px;
border: 3px solid #ad835cc9;

.title{
    text-align: center;
    font-size: 25px;
}
.bodyCart{
 margin-left: 15px;
}

.total{
    display: flex;
    align-items: end;
    justify-content: end;
}

.buttonCartBuy{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 150px;
    background-color: #27a9dd;
    border-radius: 15px;
    border: 1px solid ;
    box-shadow: 3px 6px 27px 0px rgba(0,0,0,0.75);
    cursor: pointer;
}

`
export default Cart
