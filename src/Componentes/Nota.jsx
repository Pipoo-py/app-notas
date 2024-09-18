import React, { useContext } from "react";
import { Theme } from "./ThemeContext";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";
import "../Estilos/Nota.css";

function Nota ({ title, id, content, saved, deleteNote, editNote }){
    const infoForEditNote = (e)=>{
        e.preventDefault();
        editNote(e,id);
    }

    return(
        <div className="note__general-container">
            <div className="note__title-container">
                <h2> { title } </h2>
            </div>
            <div className="note__content-container">
                { content }
            </div>
            <section className="note__interaction-section">
                <AiOutlineEdit className="interaction-icon" onClick={infoForEditNote}/> 
                <AiOutlineDelete className="interaction-icon" onClick={()=> deleteNote(id) }/>
                {
                    saved == false ? <AiOutlineCheck className="interaction-icon"/> : "".trim()
                }
            </section>
        </div>
    )
}

export default Nota;