import React, { useContext } from 'react'
import { ThemeContext} from '../contexts/Theme-context'
import styled from 'styled-components'

export const Background = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <Container theme={theme}>

        </Container>
        )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${(props) => props.theme.Background});
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    transition:  0.5s ease-in-out;
`;