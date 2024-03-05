import styled from "styled-components";
import Card from "../components/Card";

const DashboardTemplate = ({ items, setNumItems, numItems, addItem, setAddItem, handleDelete }) => {
    return (
        <Container>
            <section>
                <button className="cssbuttons-io-button" onClick={() => { setAddItem(!addItem) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
                    <span>Añadir producto</span>
                </button>
            </section>
            <section className="items">

                {

                    items && items ? items.map((item, index) => (
                        <Card
                            key={index}
                            item={item}
                            setNumItems={setNumItems}
                            numItems={numItems}
                            handleDelete={handleDelete}
                        />
                    )) : ''
                }
            </section>
        </Container>
    )
}

export default DashboardTemplate


const Container = styled.div`

.items {
margin-top:30px ;
display: grid;
grid-template-rows: repeat(auto-fit, 1fr);
grid-template-columns: repeat(3, 1fr);
gap: 20px;
justify-content: center;
align-items: center;
}



.cssbuttons-io-button {
margin: 25px;
cursor: pointer;
display: flex;
align-items: center;
font-family: inherit;
font-weight: 500;
font-size: 16px;
padding: 0.7em 1.4em 0.7em 1.1em;
color: white;
background: #ad5389;
background: linear-gradient(0deg, rgba(20,167,62,1) 0%, rgba(102,247,113,1) 100%);
border: none;
box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
letter-spacing: 0.05em;
border-radius: 20em;
}

.cssbuttons-io-button svg {
margin-right: 6px;
}

.cssbuttons-io-button:hover {
box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
}

.cssbuttons-io-button:active {
box-shadow: 0 0.3em 1em -0.5em #14a73e98;
}

`




