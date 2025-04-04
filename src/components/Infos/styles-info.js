import { styled } from "styled-components"

export const Li = styled.li`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    height: 600px;
    padding: 30px;
    margin: 12px;
    background-color: ${(props) => props.theme.fundo};
    border: ${(props) => props.theme.borda};
    transition: .5s ease-in-out;
    border-radius: 15px;

    img {
        max-width: 200px;
        height: 200px;
    }
`;

export const Div = styled.div`
    height: 150px;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    img{
        width: 70%;
    }
`;

export const DivSkills = styled.div`
    display: flex;
    justify-content: center;
    aling-item: center;
    background-color: black;
    width: 200px;

`;