import React, { useState, useEffect } from "react";
import Nota from "./Nota";
import ModalCrearNota from "./ModalCrearNota";
import '../App.css';
import { AiOutlinePlus } from "react-icons/ai";
import { v4 as uuid } from "uuid";

function ListaDeNotas() {
    const [notes, setNotes] = useState([]);
    const [create, setCreate] = useState(false);
    const [isEdit, setEdit] = useState({ edit: false, content: "", title: "", id: null });

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(storedNotes);
    }, []);

    const viewModal = () => setCreate(prev => !prev);

    const reset = () => {
        setEdit({
            edit: false,
            content: "",
            title: ""
        });
        viewModal();
    }

    const deleteNote = id => {
        const newNotes = notes.filter(note => note.id !== id);
        setNotes(newNotes);
        localStorage.setItem('notes', JSON.stringify(newNotes)); 
    }

    const newNote = (e, id) => {
        e.preventDefault();
        const newNote = {
            title: e.target[0].value,
            content: e.target[1].value,
            id: id === undefined ? uuid() : id,
        };
        const newNotes = [newNote, ...notes];
        setNotes(newNotes);
        localStorage.setItem('notes', JSON.stringify(newNotes)); 
        viewModal();
    }

    const createEditedNote = (e, id) => {
        e.preventDefault();
        newNote(e, id);
    }

    const determinateContent = (e, id) => {
        setEdit({
            edit: true,
            content: e.target.parentElement.parentElement.children[1].textContent,
            title: e.target.parentElement.parentElement.children[0].children[0].textContent,
            id: id
        });
        deleteNote(id);
        viewModal();
    }

    return (
        <>
            {
                create ? <ModalCrearNota visible={create} closeModal={viewModal} saveNote={newNote} createNoteEdited={createEditedNote} isForEdit={isEdit.edit} fullContent={isEdit} /> : null
            }

            <div className="notes__list">
                {
                    notes.map(note =>
                        <Nota
                            title={note.title}
                            content={note.content}
                            id={note.id}
                            key={note.id}
                            deleteNote={deleteNote}
                            editNote={determinateContent}
                        />
                    )
                }
            </div>
            <div className="App__new-note-container" onClick={reset}>
                <AiOutlinePlus className="new-note-icon" />
            </div>
        </>
    );
}

export default ListaDeNotas;
