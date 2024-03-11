import styled from "styled-components";
import DashboardTemplate from "../templates/Dasboard.template";
import { connect } from "react-redux";
import { itemActionRequestStarted, itemDelActionRequestStarted, itemPostActionRequestStarted } from '../redux/actions'
import { useEffect, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import Cart from "../components/Cart";
import AddItem from "../components/AddItem";


const Dashboard = (props) => {
    const { onLoadItemStarted, postItem, delItem } = props;
    const [numItems, setNumItems] = useState(0);
    const [toggleCart, setToggleCart] = useState(false)
    const [addItem, setAddItem] = useState(false);
    const [del, setDel] = useState(false)

  // Efecto de carga inicial
  useEffect(() => {
    onLoadItemStarted('/items');
    setDel(false);
  }, [onLoadItemStarted]); // Sin dependencias, se ejecuta solo al montar el componente


  useEffect(()=>{

  },[props.item])

  
  const show = () => {
        setToggleCart(!toggleCart)
    }

    const handleSubmit = (newData) => {
        postItem(newData)
        onLoadItemStarted('/items'); 
        setAddItem(!addItem)
    }
    const handleDelete = (id) => {
        delItem('/items/' + id);
        onLoadItemStarted('/items'); 
        setDel(!del);
    }

    return (
        <Container>
            {
                addItem ? <div className="add-items-container">
                    <div className="addItem">
                        <AddItem
                            addItem={addItem}
                            setAddItem={setAddItem}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                </div> : ''
            }

            <DashboardTemplate
                items={props.item}
                setNumItems={setNumItems}
                numItems={numItems}
                addItem={addItem}
                setAddItem={setAddItem}
                handleDelete={handleDelete}
            />


            <div className="buttonCart" onClick={() => { show() }}>
                {numItems} <TiShoppingCart />
            </div>

            <div className={toggleCart ? 'cart' : 'none'}>
                <Cart
                    show={show}

                />
            </div>
            <div className={toggleCart ? 'filter' : 'none'}>

            </div>
        </Container>
    )
}


//? Mapeo de los props de Redux
const mapStateToProps = (state) => ({
    item: state.itemState.item,
    error: state.itemState.error
});

//? Mapeo de la funcion a usar de Redux
const mapDispatchToProps = (dispatch) => ({
    onLoadItemStarted: (item) => dispatch(itemActionRequestStarted(item)),
    postItem: (data) => dispatch(itemPostActionRequestStarted(data)),
    delItem: (id) => dispatch(itemDelActionRequestStarted(id))
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
