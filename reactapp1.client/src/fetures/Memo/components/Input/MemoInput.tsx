import { ChangeEvent, FC } from 'react';
import { Textarea } from '@/components/ui/textarea';

type Props = {
  description?: string;
  handleChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit?: () => void;
};

export const MemoInput: FC<Props> = ({
  description = '',
  handleChange = () => undefined,
  handleSubmit = () => undefined,
}) => {
  return (
    <Textarea
      placeholder="メモを入力..."
      value={description}
      onChange={handleChange}
      onBlur={handleSubmit}
      className="mx-auto my-4 w-96"
      name="MemoInput"
    />
  );
};
