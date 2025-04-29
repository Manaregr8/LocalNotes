"use client";
import { useEffect, useState } from 'react';
import { getRecentNotes } from './lib/storage';
import Nav from './components/Nav';
import Styles from './styles/home.module.css';
export default function Home() {
  const [recentNotes, setRecentNotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const notes = getRecentNotes();
      setRecentNotes(notes);
    } catch (err) {
      setError('Failed to load recent notes.');
    }
  }, []);

  return (
    <div className={Styles.containerMain} style={{ padding: 20 }}>
            <h1 className={Styles.heading}>Notepad</h1>
      <Nav />

      <h3 className={Styles.headingsmall}>Recent Notes</h3>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul className={Styles.notesContainer}>
        {recentNotes.map((note, index) => (
          <li className={Styles.notes} key={index}>
            <strong className={Styles.notestitle}>{note.title}</strong><br />
            <small className={Styles.notesdata}>{note.content.slice(0, 100)}...</small><br /><br />
          </li>
        ))}
        {recentNotes.length === 0 && <p>No notes yet.</p>}
      </ul>
    </div>
  );
}
