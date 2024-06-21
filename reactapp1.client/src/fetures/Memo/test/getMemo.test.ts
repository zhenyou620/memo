import * as getMemo from '../api/getMemo';
import { httpError, getMemoData } from './fixtures';

jest.mock('../api/getMemo');

const mockGetMemo = (status = 200) => {
  if (status > 299) {
    return jest.spyOn(getMemo, 'getMemo').mockRejectedValueOnce(httpError);
  }
  return jest.spyOn(getMemo, 'getMemo').mockResolvedValueOnce(getMemoData);
};

test('データ取得成功時、すべてのメモが返る', async () => {
  mockGetMemo();
  const data = await getMemo.getMemo();
  expect(data).toEqual(getMemoData);
});

test('データ取得失敗時、エラーを返す', async () => {
  mockGetMemo(500);
  await getMemo.getMemo().catch((err: Error) => {
    expect(err).toMatchObject({
      err: { message: 'internal server error' },
    });
  });
});
