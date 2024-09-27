import './styles.css';
import { saveNote, getNote } from './db.js';

document.addEventListener('DOMContentLoaded', async () => {
    const editor = document.getElementById('editor');

    // Load existing note
    const note = await getNote();
    if (note) {
        editor.textContent = note.content;
    }

    // Save note on window blur
    window.addEventListener('blur', () => {
        saveNote(editor.textContent);
    });
});
