import Cabecalho from "./components/Header/Header"
import { createGlobalStyle} from "styled-components"
import Conteudo from "./components/Main/Conteudo-API"
import { Background } from "./components/Background/background"

import { ThemeProvider } from "./components/contexts/Theme-context"
import { ThemeTogglerButton } from "./components/theme-toggle-button/theme-toggler.button"


function App() {

  return (
    <ThemeProvider>
      <Cabecalho />
      <ThemeTogglerButton />
      <Background />
      <Conteudo />
      <GlobalStyle />
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
