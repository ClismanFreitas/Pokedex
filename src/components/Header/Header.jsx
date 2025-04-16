import styled from "styled-components"
import Logo from "../../Assets/Image/logo.png"

const Cabecalho = () => {
    return (
        <Header>
            <Div>
                <Img src={Logo} />
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
    `;



export default Cabecalho