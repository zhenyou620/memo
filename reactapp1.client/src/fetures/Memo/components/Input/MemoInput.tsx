import { ChangeEvent, FC } from 'react';
import { Textarea } from '@/components/ui/textarea';

type Props = {
  description: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
};

export const MemoInput: FC<Props> = ({
  description = '',
  handleChange = () => undefined,
  handleSubmit = () => undefined,
}) => {
  return (
    <Textarea
      placeholder="Type your memo here..."
      value={description}
      onChange={handleChange}
      onBlur={handleSubmit}
      className="w-96 my-4 mx-auto"
      id="MemoInput"
    />
  );
};
