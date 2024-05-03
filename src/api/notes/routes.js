const routes = (handler) => [
  {
    method: 'POST',
    path: '/notes',
    handler: (r, h) => handler.postNoteHandler(r, h),
  },
  {
    method: 'GET',
    path: '/notes',
    handler: (r, h) => handler.getNotesHandler(r, h),
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: (r, h) => handler.getNoteByIdHandler(r, h),
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: (r, h) => handler.putNoteByIdHandler(r, h),
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: (r, h) => handler.deleteNoteByIdHandler(r, h),
  },
];

module.exports = routes;
