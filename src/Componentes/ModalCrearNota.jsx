import React from "react";
import "../Estilos/Modal.css";
import { AiOutlineClose } from "react-icons/ai";

function ModalCrearNota({ visible, closeModal, saveNote, isForEdit, createNoteEdited,fullContent}){

    const view = visible ? "grid" : "none";
    const noteTitle = fullContent.title;
    const noteDescription = fullContent.content;

    const infoForEditNote = (e)=>{
        e.preventDefault();
        createNoteEdited(e,fullContent.id);
    }

    return(
        <div className="modal-bg" style={{display: view }}>
            <AiOutlineClose  className="modal__close-icon" onClick={closeModal}/>
            <div className="modal__container">
                <h2 className="modal__title"> {isForEdit ? "Edita la nota": "Crear una nota nueva"}</h2>
                <form className="modal__form" onSubmit={isForEdit ? infoForEditNote: saveNote}>
                    <input type="text" placeholder="Escriba el título" defaultValue={isForEdit ? noteTitle: null} contentEditable="true" />
                    <textarea placeholder="Escriba el contenido de la nota" defaultValue={isForEdit ? noteDescription: null} />
                    <button className="modal__button">Guardar</button>
                </form>
            </div>
        </div>
    )
}

export default ModalCrearNota;