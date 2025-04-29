export const STORAGE_KEY = 'custom_notes_v1';

export function getNotes() {
  try {
    const notes = localStorage.getItem(STORAGE_KEY);
    return notes ? JSON.parse(notes) : [];
  } catch (error) {
    throw new Error('Failed to load notes');
  }
}

export function saveNote(note) {
  try {
    const notes = getNotes();
    notes.unshift(note);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    throw new Error('Failed to save note');
  }
}
export function getRecentNotes(limit = 4) {
    try {
      const notes = getNotes();
      return notes.slice(0, limit);
    } catch (error) {
      throw new Error('Failed to load recent notes');
    }
  }
  