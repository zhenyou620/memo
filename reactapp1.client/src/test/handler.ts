import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('api/GetTask', () => {
    return HttpResponse.json([
      {
        id: 1,
        text: 'Test Task',
      },
      {
        id: 1,
        text: 'Test Task',
        isArchived: true,
      },
      {
        id: 1,
        text: 'Test Task',
        isPinned: true,
      },
      {
        id: 1,
        text: 'Test Task',
        isArchived: true,
        isPinned: true,
      },
    ]);
  }),
];
