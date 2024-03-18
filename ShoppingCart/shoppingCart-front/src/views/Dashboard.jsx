import styled from "styled-components";
import DashboardTemplate from "../templates/Dasboard.template";
import { useEffect, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import Cart from "../components/Cart";
import AddItem from "../components/AddItem";
import { useRecoilState } from "recoil";
import {  itemsAtom, cartAtom, itemsCartAtom } from "../recoil/atoms";
import { get, del } from "../services/request";


const Dashboard = () => {
    const [numItems, setNumItems] = useState(0);
    const [toggleCart, setToggleCart] = useState(false)
    const [toggleItem, setToggleItem] = useState(false);
    const [delItem, setDel] = useState(false);
    const [items, setItem] = useRecoilState(itemsAtom)
    const [cart, setCart] = useRecoilState(cartAtom); // Usar la clave cartState
    const [itemsCart, setItemsCart] = useRecoilState(itemsCartAtom); // Usar la clave itemsCartState

    //*? Intento de traer los items con Recoil

    useEffect(() => {
        fetchItems()
        fetchItemsCart()
    }, [items.legth])



    useEffect(() => {
        if (items.legth !== 0) {
            setNumItems(items.length)
        }
    }, [items])

    const show = () => {
        setToggleCart(!toggleCart)
    }

    const handleSubmitItem = (newData) => {
        let _item = [...items, newData]
        setItem(_item)
        // postItem(newData)
        setToggleItem(!toggleItem)
    }

    const handleDelete = (id) => {
        const _items = [...items]
        const updatedItem = _items.filter(item => item.id !== id);
        setItem(updatedItem)
        del(`/items/${id}`)
        setDel(!delItem);
    }

    const handleSubmitItemCart = (newData) => {
        // postItemCart(newData)
        //onLoadCartStarted('/carts/1')
    }


    async function fetchItems() {
        let items = await get('/items')
        setItem(items)
    }

    async function fetchItemsCart() {
        let cart = await get('/carts/1')
        let itemsCart = await get('/carts/1/items')

        setCart(cart)
        setItemsCart(itemsCart)
    }



    return (
        <Container>
            {
                //*Modal de añadir items 

                toggleItem && <div className="add-items-container">
                    <div className="addItem">
                        <AddItem
                            toggle={toggleItem}
                            setToggle={setToggleCart}
                            handleSubmit={handleSubmitItem}
                        />
                    </div>
                </div>
            }


            <DashboardTemplate
                setNumItems={setNumItems}
                handleDelete={handleDelete}
                numItems={numItems}
                toggle={toggleItem}
                setToggle={setToggleItem}
                submit={handleSubmitItemCart}
                items={items}
            />

            <div className="buttonCart" onClick={() => { show() }}>
                {numItems} <TiShoppingCart />
            </div>
            <div className={toggleCart ? 'cart' : 'none'}>
                <Cart
                    show={show}
                    cart={cart}
                    items={itemsCart}
                />
            </div>
            <div className={toggleCart ? 'filter' : 'none'}>
            </div>
        </Container>
    )
}




const Container = styled.div`


.buttonCart{
position: fixed;
bottom: 32px;
right: 25px;
display: flex;
align-items: center;
justify-content: center;
font-size: 35px;
width: 70px;
height: 70px;
border-radius: 150px;
cursor: pointer;
box-shadow: 3px 6px 27px 0px rgba(0,0,0,0.75); 
background-color: #35a6c3;
padding: 5px;
z-index: 4;
}

.add-items-container {
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
}


.addItem{
    width: fit-content;
    height: fit-content;
    padding: 20px;
    background-color: #59616396;
    border-radius: 15px;
}



.filter{
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-color: #00000064;
}

.none{
    display: none;
}




`
export default Dashboard
