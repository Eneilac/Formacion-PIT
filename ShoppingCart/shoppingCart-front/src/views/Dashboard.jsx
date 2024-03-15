import styled from "styled-components";
import DashboardTemplate from "../templates/Dasboard.template";
import { connect } from "react-redux";
import { cartActionRequestStarted, cartItemPostActionRequestStarted, cartItemsActionRequestStarted, itemActionRequestStarted, itemPostActionRequestStarted } from '../redux/actions'
import { useEffect, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import Cart from "../components/Cart";
import AddItem from "../components/AddItem";
import { useRecoilState } from "recoil";
import { getItems } from "../recoil/atoms";
import { get, del } from "../services/request";


const Dashboard = (props) => {
    const { onLoadItemStarted, postItem, onLoadCartStarted, onLoadItemsCartStarted, postItemCart } = props;
    const [numItems, setNumItems] = useState(0);
    const [toggleCart, setToggleCart] = useState(false)
    const [toggleItem, setToggleItem] = useState(false);
    const [delItem, setDel] = useState(false);
    const [items, setItem] = useRecoilState(getItems)

    // Efecto de carga inicial
    useEffect(() => {
        onLoadCartStarted('/carts/1') //*! Pongo el id 1 para simular el usuario con id 1 ya que no tengo login
        onLoadItemsCartStarted('/carts/1/items')
        setDel(false);
    }, [onLoadItemStarted, onLoadCartStarted, onLoadItemsCartStarted]);


    //*? Intento de traer los items con Recoil

    useEffect(() => {
        async function fetchItems() {
            let items = await get('/items')
            setItem(items)
        }
        fetchItems()
    }, [items.legth])



    useEffect(() => {
        if (props.itemsCart.legth !== 0) {
            setNumItems(props.itemsCart.length)
        }
    }, [props.itemsCart])

    const show = () => {
        setToggleCart(!toggleCart)
    }

    const handleSubmitItem = (newData) => {
        let _item = [...items, newData]
        setItem(_item)
        postItem(newData)
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
        postItemCart(newData)
        onLoadCartStarted('/carts/1')
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
                    cart={props.cart}
                    items={props.itemsCart}
                />
            </div>
            <div className={toggleCart ? 'filter' : 'none'}>
            </div>
        </Container>
    )
}


//? Mapeo de los props de Redux
const mapStateToProps = (state) => {
    return {
        item: state.itemState.item,
        error: state.itemState.error,
        cart: state.cartState.cart,
        itemsCart: state.cartState.itemsCart
    }
}


//? Mapeo de la funcion a usar de Redux
const mapDispatchToProps = (dispatch) => ({
    onLoadItemStarted: (item) => dispatch(itemActionRequestStarted(item)),
    onLoadCartStarted: (cart) => dispatch(cartActionRequestStarted(cart)),
    onLoadItemsCartStarted: (query) => dispatch(cartItemsActionRequestStarted(query)),
    postItem: (data) => dispatch(itemPostActionRequestStarted(data)),
    postItemCart: (item) => dispatch(cartItemPostActionRequestStarted(item)),
});


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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
