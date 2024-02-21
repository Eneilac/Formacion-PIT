import styled from "styled-components";
import Card from "../components/Card";

const DashboardTemplate = () => {

    return (
        <Container>
            <section className="dashboard">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </Container>
    )
}


export default DashboardTemplate




const Container = styled.div`

.dashboard {
margin-top:30px ;
display: grid;
grid-template-rows: repeat(auto-fit, 1fr);
grid-template-columns: repeat(3, 1fr);
gap: 20px;
justify-content: center;
align-items: center;
}
`




