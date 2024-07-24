import { http, HttpResponse } from 'msw';

export const memoHandlers = [
  http.get('api/Memos', () => {
    return HttpResponse.json([
      { id: 1, description: 'Memo1' },
      { id: 2, description: 'Memo2' },
      { id: 3, description: 'Memo3' },
      { id: 4, description: 'Memo4' },
    ]);
  }),
  http.post('/api/memos', () => {
    return new HttpResponse(null, {
      status: 201,
    });
  }),
];
