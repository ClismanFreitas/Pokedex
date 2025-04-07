import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/Theme-context"
import { styled } from "styled-components"

export const Button = (props) => {

    const { theme } = useContext(ThemeContext)

    return (
        <Div>
            <Btn {...props} theme={theme}>
                <Img src={theme.icon} />
            </Btn>
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

`;

const Btn = styled.button`
    background-color: ${(props) => props.theme.color};
    border: none;
    padding: 13px 30px;
    border-radius: 50%;
    width: 60px;  
    height: 60px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s ease-in-out;
`;

const Img = styled.img`
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    ${Btn}:hover & {
        opacity: 0.8;
        transform: scale(1.1);
    }
`;