import React, { useContext } from "react"
import { ThemeContext, themes } from "../contexts/Theme-context"
import { Button } from "../Button/Button";

export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)  
    
    return(
        <div>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Clique aqui</Button>
        </div>
    )
}