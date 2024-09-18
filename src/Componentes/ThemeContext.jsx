import React from "react";
import { createContext,useState } from "react";

export const Theme = createContext();

export function ThemeComponent({children}){
    const [theme, setTheme] = useState("light");

    const toggleTheme = ()=>{
        setTheme(previousTheme => (previousTheme == "light" ? "dark": "light"));
    }

    return(
        <Theme.Provider value ={{theme,toggleTheme}}>
            {children}
        </Theme.Provider>
    )
}