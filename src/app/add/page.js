"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveNote } from '../lib/storage';
import Nav from '../components/Nav';
import Styles from "../styles/add.module.css";
export default function AddNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      saveNote({ title, content, created: new Date().toISOString() });
      setLoading(false);
      router.push('/notes');
    } catch (err) {
      setLoading(false);
      setError('Error saving note.');
    }
  }; 

  return (
    <div className={Styles.containerAdd} style={{ padding: 20 }}>
      <Nav />
      <h2 className={Styles.headingsmall}>Add Note</h2>
      {error && <div style={{ color: 'red' }}>{error} </div>}  
      <form className={Styles.addForm} onSubmit={handleSubmit}>
        <input
        className={Styles.input}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        /><br /><br />
        <textarea
        className={Styles.input}
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        /><br /><br />
        <button className={Styles.btn} type="submit">{loading ? 'Saving…' : 'Save Note'}</button>
      </form>
    </div>
  );
}
