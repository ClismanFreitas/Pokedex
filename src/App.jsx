import Cabecalho from "./components/Header/Header"
import { createGlobalStyle } from "styled-components"
import Conteudo from "./components/Main/Conteudo-API"
import { Background } from "./components/Background/background"

import { ThemeProvider } from "./components/contexts/Theme-context"
import { ThemeTogglerButton } from "./components/theme-toggle-button/theme-toggler.button"

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InfoPokemon from "./components/Infos/informacoes"


function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Cabecalho />
        <ThemeTogglerButton />
        <Background />

        <Routes>
          <Route path="/" element={<Conteudo />} />
          <Route path="/informacoes" element={<InfoPokemon />} />
        </Routes>

        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
 
}`;

export default App
