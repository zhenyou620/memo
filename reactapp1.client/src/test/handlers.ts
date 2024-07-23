import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('api/GetTask', () => {
    return HttpResponse.json([
      { id: 1, text: 'Task1' },
      { id: 2, text: 'Task2', isArchived: true },
      { id: 3, text: 'Task3', isPinned: true },
      { id: 4, text: 'Task4', isArchived: true, isPinned: true },
    ]);
  }),
  http.get('api/Memos', () => {
    return HttpResponse.json([
      { id: 1, description: 'Memo1' },
      { id: 2, description: 'Memo2' },
      { id: 3, description: 'Memo3' },
      { id: 4, description: 'Memo4' },
    ]);
  }),
];
