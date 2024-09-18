import React, { useContext } from "react";
import { AiFillMoon } from "react-icons/ai";
import "../Estilos/Header.css";
import { Theme } from "./ThemeContext";

function Header(){

    const {theme, toggleTheme} = useContext(Theme);

    return(
        <div className={`App__general-container-${theme}`}>
            <header className="App__header-container">
                <h1 className="header__title">Notas</h1>
                <AiFillMoon className="header__dark-icon" onClick={ toggleTheme }/>
            </header>
        </div>
    )
}

export default Header;
