import { ChangeEvent, FC } from 'react';

type Props = {
  description?: string;
  handleChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit?: () => void;
};

export const MemoInput: FC<Props> = ({
  description = '',
  handleChange,
  handleSubmit,
}) => {
  return (
    <textarea
      placeholder="メモを入力..."
      value={description}
      onChange={handleChange}
      onBlur={handleSubmit}
      className="mx-auto my-4 h-20 w-96 resize-none rounded-md border border-gray-300 p-4"
      name="MemoInput"
    />
  );
};
