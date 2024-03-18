import styled from "styled-components";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { RiCloseCircleFill } from "react-icons/ri";
import { useEffect, useState } from "react";



const Cart = ({ show, cart, items }) => {

    const [total, setTotal] = useState(0)

    console.log(cart)

    //*sin depenedencias para que solo haga el calculo 1 vez al entrar al componente.
    useEffect(() => {
        totalCart()
    })

    const totalCart = () => {
        let suma = 0;

        for (const item of items) {
            suma += item.price
        }
        setTotal(suma)
    }



    return (
        <Container className="cart-container">
            <div className="cart">
                <div className="close" onClick={() => { show() }}>
                    <RiCloseCircleFill className="icon" />
                </div>
                <div className="title">
                    <h2>Carrito de compra del usuario {cart.user_id}</h2>
                </div>

                <div className="bodyCart">
                    {
                        items.map((item,index)=>(
                            <p key={index}>
                                {item.description}
                            </p>
                        ))
                    }
                </div>
                <div className="total">
                    <p>Total: {total}€</p>
                </div>

                <button className="buttonCartBuy">Pagar <RiMoneyEuroCircleLine />
                </button>
            </div>
        </Container>
    )
}


const Container = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    background: rgba(0,0,0,0.2);
    backdrop-filter: blur(10px);
    z-index: 99999!important;



.title{
    text-align: center;
    font-size: 25px;
}
.bodyCart{
 margin-left: 15px;
}

.cart{
    width: fit-content;
    height: fit-content;
    padding: 20px;
    background-color: #59616396;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    color: white;
}

.total{
    display: flex;
    align-items: end;
    justify-content: end;
}

.buttonCartBuy{
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    gap: 4px;
    width: 150px;
    background-color: #27a9dd;
    border-radius: 5px;
    box-shadow: 3px 6px 27px 0px rgba(0,0,0,0.75);
    cursor: pointer;
    color: white;
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
        color: #27a9dd;
}
`
export default Cart
