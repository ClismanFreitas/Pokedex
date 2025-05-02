import styled from "styled-components"
import Logo from "../../Assets/Image/logo.png"

const Cabecalho = () => {
    return (
        <Header id="topo">
            <Div>
                <Img src={Logo} alt="logo pokemon" />
            </Div>
        </Header>
    )
}
    const Header = styled.header`
        display: flex;
        justify-content: center;
    `;

    const Div = styled.div`
        justify-content: center;
        display: flex;
    `;

    const Img = styled.img`
        width: 30%;

        @media(max-width: 900px){
            width: 40%;
        }

        @media(max-width: 500px){
            width: 60%;
        }
    `;



export default Cabecalho