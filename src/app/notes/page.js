"use client";
import { useEffect, useState } from 'react';
import { getNotes } from '../lib/storage';
import Nav from '../components/Nav';
import Styles from "../styles/notes.module.css";
export default function NotesList() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setNotes(getNotes());
    } catch (err) {
      setError('Failed to load notes.');
    }
  }, []);

  return (
    <div className={Styles.noteConatiner} style={{ padding: 20 }}>
      <Nav />
      <h2 className={Styles.headingsmall}>All Notes</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul  className={Styles.notesContainer}  >
        {notes.map((note, i) => (
          <li className={Styles.note} key={i}>
            <strong className={Styles.notestitle}>{note.title}</strong>
            <p className={Styles.notesdata}>{note.content.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}