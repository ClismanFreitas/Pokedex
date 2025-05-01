import { createContext, useState } from "react"
import Dark from "../Assets/Image/wallpaper-dark.jpg"
import Light from "../Assets/Image/wallpaper-light.jpg"
import Lua from "../Assets/Image/lua.png"
import Sol from "../Assets/Image/sol.png"

export const themes ={
    light: {
        color: '#D3A446',
        Background: Light,
        icon: Sol,
        borda: '2px solid #DBAB47',
        fundo: 'rgb(80 60 26 / 69%)',
        scroll: '#DBAB47'
    },
    dark: {
        color: '#6B6DCF',
        Background: Dark,
        icon: Lua,
        borda: '2px solid #B264E0',
        fundo: 'rgba(55, 35, 68, 0.6)',
        scroll: '#B264E0'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.dark)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
