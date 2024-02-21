import styled from "styled-components";



const Card = () => {

    return (
        <Container>
            <div className="card">
                <div className="card-inner"></div>
            </div>
        </Container>
    )
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;

.card {
  width: 190px;
  height: 254px;
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
}

.card-inner {
  width: inherit;
  height: inherit;
  background: rgba(255,255,255,.05);
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
  backdrop-filter: blur(10px);
  border-radius: 8px;
}

.card:hover {
  transform: scale(1.04) rotate(1deg);
}


`
export default Card
