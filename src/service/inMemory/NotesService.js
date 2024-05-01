const { nanoid } = require('nanoid');

class NotesService {
  constructor() {
    this._notes = [];
  }

  addNote({ title, body, tags }) {
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const notePayload = {
      id, title, body, tags, createdAt, updatedAt,
    };

    this._notes.push(notePayload);

    const isSaved = this._notes.find((it) => it.id === id);
    if (!isSaved) {
      throw new Error('Catatan gagal ditambahkan');
    }

    return id;
  }

  getNotes() {
    return this._notes;
  }

  getNoteById(id) {
    const note = this._notes.find((it) => it.id === id);
    if (!note) {
      throw new Error('Note tidak ditemukan.');
    }

    return note;
  }

  editNoteById(id, { title, body, tags }) {
    const noteIndex = this._notes.findIndex((it) => it.id === id);

    if (noteIndex < 0) {
      throw new Error('Note gagal di edit. Note tidak ditemukan.');
    }

    this._notes[noteIndex] = {
      ...this._notes[noteIndex],
      title,
      body,
      tags,
    };
  }

  deleteNoteById(id) {
    const noteIndex = this._notes.findIndex((it) => it.id === id);
    if (noteIndex < 0) {
      throw new Error('Note gagal dihapus. Note tidak ditemukan');
    }

    this._notes.splice(noteIndex, 1);
  }
}

module.exports = NotesService;
