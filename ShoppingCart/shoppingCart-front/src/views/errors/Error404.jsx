import styled from "styled-components";

const Error404 = () => {

    return (
        <Container>
            <div className="error">
                <h1>Error 404 - Página no encontrada</h1>
                <p>Lo sentimos, la página que estás buscando no existe.</p>
                <p>Regresa a la <a href="/">página de inicio</a>.</p>
            </div>

        </Container>
    )
}

const Container = styled.div`

.error {
    text-align: center;
    font-family: 'Arial', sans-serif;
    background-color: #242323;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;
}



.error>h1 {
    font-size: 3em;
    color: #c9c5c5;
    margin-bottom: 10px;
}

.error>p {
    font-size: 1.2em;
    color: #777;
    margin-top: 0;
}

.error>a {
    color: #3498db;
    text-decoration: none;
}

.error>a:hover {
    text-decoration: underline;
}

`
export default Error404
