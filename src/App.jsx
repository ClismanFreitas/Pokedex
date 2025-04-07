import Cabecalho from "./components/Header/Header"
import Conteudo from "./components/Main/Conteudo-API"
import { Background } from "./components/Background/background"

import { ThemeProvider } from "./contexts/Theme-context"
import { ThemeTogglerButton } from "./components/theme-toggle-button/theme-toggler.button"

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InfoPokemon from "./components/Infos/informacoes"
import { GlobalStyle } from "./reset-global"


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



export default App
