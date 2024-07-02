import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as postMemo from '../../api/postMemo';
import { MemoInput } from '../../components/Input/MemoInput';
import { httpError } from './fixtures';

const user = userEvent.setup();

jest.mock('../api/postMemo');

// class ValidationError extends Error {}

// const checkLength = (value: string) => {
//   if (value.length === 0) {
//     throw new ValidationError('1文字以上入力してください');
//   }
// };

const mockPostMemo = (status = 200) => {
  if (status > 299) {
    return jest.spyOn(postMemo, 'postMemo').mockRejectedValueOnce(httpError);
  }
  try {
    // checkLength(input.description);
    return jest.spyOn(postMemo, 'postMemo').mockResolvedValue();
  } catch (error) {
    return jest.spyOn(postMemo, 'postMemo').mockRejectedValueOnce(httpError);
  }
};

const inputMemo = async (inputValue = { description: 'UItest' }) => {
  await user.type(
    screen.getByPlaceholderText('メモを入力...'),
    inputValue.description,
  );

  return inputValue;
};

const submitMemo = () => {
  fireEvent.blur(screen.getByRole('paragraph', { name: 'MemoInput' }));
};

const fillValueAndSubmit = async () => {
  const memo = await inputMemo();
  const submitValue = { ...memo };
  submitMemo();

  return submitValue;
};

test('登録成功時、登録したメモが表示される', async () => {
  const mockFn = mockPostMemo();
  render(<MemoInput></MemoInput>);
  const submitValue = await fillValueAndSubmit();
  expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValue));
});
