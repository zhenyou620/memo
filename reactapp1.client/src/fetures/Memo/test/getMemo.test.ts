import * as Fetcher from '../api/getMemo';
import { httpError, getMemoData } from './fixtures';

jest.mock('../api/getMemo');

const mockGetMemo = (status = 200) => {
  if (status > 299) {
    return jest.spyOn(Fetcher, 'getMemo').mockResolvedValueOnce();
  }
  return jest.spyOn(Fetcher, 'getMemo').mockResolvedValueOnce(getMemoData);
};

test('データ取得成功時', async () => {
  mockGetMemo();
});

test('データ取得失敗時', async () => {
  mockGetMemo(500);
});
