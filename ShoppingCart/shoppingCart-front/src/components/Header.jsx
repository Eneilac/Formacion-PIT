import styled from "styled-components";
import icons from '../utils/icons'

const Header = () => {

    return (
        <Container>
            <nav>
                <div className='icon' >
                    <icons.cartIcon
                        size={70}
                        color={'white'}
                    />
                    <p>NEILA SHOP</p>
                </div>
            </nav>
        </Container>
    )
}

const Container = styled.div`

nav{
background-color: #1e1c1c;
padding: 0 15px;
color: white;
box-shadow: 1px -2px 16px 20px rgba(255,255,255,1);
font-family: "Micro 5", sans-serif;
font-weight: 200;
font-style: normal;
font-size: 35px;
}

.icon{
display: flex;
gap:1em;
justify-content: start;
align-items: center;
}

`
export default Header
