class NotesHandler {
  constructor(service) {
    this._service = service;
  }

  postNoteHandler(request, h) {
    try {
      const { title = 'untitled', body, tags } = request.payload;

      const noteId = this._service.addNote({ title, body, tags });

      const response = h.response({
        status: 'success',
        message: 'Note berhasil disimpan.',
        data: {
          noteId,
        },
      });

      response.code(201);
      return response;
    } catch (e) {
      const response = h.response({
        status: 'fail',
        message: e.message,
      });
      response.code(400);
      return response;
    }
  }

  getNotesHandler() {
    const notes = this._service.getNotes();
    return {
      status: 'success',
      data: {
        notes,
      },
    };
  }

  getNoteByIdHandler(request, h) {
    try {
      const { id } = request.params;
      const note = this._service.getNoteById(id);
      return {
        status: 'success',
        data: {
          note,
        },
      };
    } catch (e) {
      const response = h.response({
        status: 'fail',
        message: e.message,
      });
      response.code(404);
      return response;
    }
  }

  putNoteByIdHandler(request, h) {
    try {
      const { id } = request.params;
      const { title, body, tags } = request.payload;

      this._service.editNoteById(id, { title, body, tags });

      return {
        status: 'success',
        message: 'Catatan berhasil diperbarui',
      };
    } catch (e) {
      const response = h.response({
        status: 'fail',
        message: e.message,
      });

      response.code(404);
      return response;
    }
  }

  deleteNoteByIdHandler(request, h) {
    try {
      const { id } = request.params;

      this._service.deleteNoteById(id);

      return {
        status: 'success',
        message: 'Catatan berhasil dihapus.',
      };
    } catch (e) {
      const response = h.response({
        status: 'fail',
        message: e.message,
      });
      response.code(404);
      return response;
    }
  }
}

module.exports = NotesHandler;
