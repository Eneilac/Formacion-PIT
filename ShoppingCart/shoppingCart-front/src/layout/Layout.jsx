import styled from "styled-components";
import Header from "../components/Header";
import Dashboard from "../views/Dashboard"

const Layout = () => {

    return (
        <Container >
            <div className="container">
                <section className="header">
                    <Header />
                </section>

                <section className="main">
                    <Dashboard />
                </section>
            </div>
        </Container>
    )
}

const Container = styled.div`

.container {
overflow-x: hidden;
height: 100vh;
display: grid;
grid:
    "header" auto
    "main" 1fr
    / 1fr;
gap: 8px;
}

.header { 
grid-area: header; 
}



.main { 
grid-area: main;

}

`


export default Layout
