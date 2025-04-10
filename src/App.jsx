import Cabecalho from "./components/Header/Header"
import ConteudoDescricao from "./components/services/api/Conteudo-api"
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
          <Route path="/" element={<ConteudoDescricao />} />
          <Route path="/informacoes" element={<InfoPokemon />} />
        </Routes>

        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}



export default App
