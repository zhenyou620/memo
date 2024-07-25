import { http, HttpResponse } from 'msw';

export const taskHandlers = [
  http.get('api/Tasks', () => {
    return HttpResponse.json([
      { id: 1, text: 'Task1' },
      { id: 2, text: 'Task2', isArchived: true },
      { id: 3, text: 'Task3', isPinned: true },
      { id: 4, text: 'Task4', isArchived: true, isPinned: true },
    ]);
  }),
];