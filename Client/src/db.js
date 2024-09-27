import { openDB } from 'idb';

const initDB = async () => {
    const db = await openDB('text-editor', 1, {
        upgrade(db) {
            db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
        },
    });
    return db;
};

export const saveNote = async (content) => {
    const db = await initDB();
    await db.put('notes', { id: 1, content }); // Replace with dynamic ID as needed
};

export const getNote = async () => {
    const db = await initDB();
    return await db.get('notes', 1); // Replace with dynamic ID as needed
};
