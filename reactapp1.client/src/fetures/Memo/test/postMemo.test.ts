import * as postMemo from '../api/postMemo';
import { Memo } from '../types/memo';
import { httpError, MemoData } from './fixtures';

jest.mock('../api/postMemo');

class ValidationError extends Error {}

const checkLength = (value: string) => {
  if (value.length === 0) {
    throw new ValidationError('1文字以上入力してください');
  }
};

const mockPostMemo = (input: Memo, status = 200) => {
  if (status > 299) {
    return jest.spyOn(postMemo, 'postMemo').mockRejectedValueOnce(httpError);
  }
  try {
    checkLength(input.description);
    return jest
      .spyOn(postMemo, 'postMemo')
      .mockResolvedValue({ ...MemoData, ...input });
  } catch (error) {
    return jest.spyOn(postMemo, 'postMemo').mockRejectedValueOnce(httpError);
  }
};

const inputFactory = (input?: Partial<Memo>) => {
  return {
    id: 800,
    description: 'test',
    ...input,
  };
};

test('バリデーションに成功した場合、成功レスポンスが返る', async () => {
  const input = inputFactory();
  const mock = mockPostMemo(input);
  const data = await postMemo.postMemo(input.description);
  expect(data).toMatchObject(expect.objectContaining(input));
  expect(mock).toHaveBeenCalled();
});

test('バリデーションに失敗した場合、rejectされる', async () => {
  expect.assertions(2);
  const input = inputFactory({ id: 10000, description: '' });
  const mock = mockPostMemo(input);
  let error;
  try {
    await postMemo.postMemo(input.description);
  } catch (err) {
    error = err;
  } finally {
    expect(error).toMatchObject({ err: { message: expect.anything() } });
    expect(mock).toHaveBeenCalled();
  }
});

test('データ取得に失敗した場合、rejectされる', async () => {
  expect.assertions(2);
  const input = inputFactory();
  const mock = mockPostMemo(input, 500);
  let error;
  try {
    await postMemo.postMemo(input.description);
  } catch (err) {
    error = err;
  } finally {
    expect(error).toMatchObject({ err: { message: expect.anything() } });
    expect(mock).toHaveBeenCalled();
  }
});
