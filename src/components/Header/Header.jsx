import styled from "styled-components"

const Cabecalho = () => {
    return (
        <Header>
            <Div>
                <Img src="./src/assets/image/test.png" />
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