import styles from '../../styles/Evernote.module.scss'
import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function NoteOperations({ getSingleNote }) {
    const [isInputVisible, setInputVisible] = useState(false);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDesc, setNoteDesc] = useState('igisgikcug');
    const [notesArray, setNotesArray] = useState([
        {
            noteTitle:'note1'
        }
        ,{
            noteTitle:'note2'
        }
    ]);
    const inputToggle = () => {
        setInputVisible(!isInputVisible)
    }

    const addDesc = (value) => {
        setNoteDesc(value)
    }

    const saveNote = () => {
        // addDoc(dbInstance, {
        //     noteTitle: noteTitle,
        //     noteDesc: noteDesc
        // })
        //     .then(() => {
        //         setNoteTitle('')
        //         setNoteDesc('')
        //         getNotes();
        //     })
   console.log('add doc')
    }

    const getNotes = () => {
        // getDocs(dbInstance)
        //     .then((data) => {
        //         setNotesArray(data.docs.map((item) => {
        //             return { ...item.data(), id: item.id }
        //         }));
        //     })
        console.log('get docs');
    }

    useEffect(() => {
        getNotes();
    }, [])
    return (
        <>
            <div className={styles.btnContainer}>
                <button
                    onClick={inputToggle}
                    className={styles.button}>
                    Add a New Note
                </button>
            </div>

            {isInputVisible ? (
                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
                        placeholder='Enter the Title..'
                        onChange={(e) => setNoteTitle(e.target.value)}
                        value={noteTitle}
                    />
                    <div className={styles.ReactQuill}>
                        <ReactQuill
                            onChange={addDesc}
                            value={noteDesc}
                        />
                    </div>
                    <button
                        onClick={saveNote}
                        className={styles.saveBtn}>
                        Save Note
                    </button>
                </div>
            ) : (
                <></>
            )}

            <div className={styles.notesDisplay}>
                {notesArray.map((note) => {
                    return (
                        <div
                            key={note.id}
                            className={styles.notesInner}
                            onClick={() => getSingleNote(note.id)}>
                            <h4>{note.noteTitle}</h4>
                        </div>
                    )
                })}
            </div>
        </>
    )
}