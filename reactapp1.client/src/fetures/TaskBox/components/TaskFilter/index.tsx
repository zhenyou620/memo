import { FC } from 'react';

interface Props {
  options: string[];
  value: string;
  defaultValue: string;
  onChange?: () => void;
}

export const TaskFilter: FC<Props> = ({ options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="h-10 w-40 rounded-lg border border-slate-500 p-1 text-lg"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
