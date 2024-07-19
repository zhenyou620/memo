import { ChangeEvent, FC } from 'react';

interface Props {
  options?: string[];
  value?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
}

export const TaskFilter: FC<Props> = ({
  options = [],
  value,
  onChange,
  label,
}) => {
  return (
    <>
      <label htmlFor="taskFilter" className="mr-2">
        {label}
      </label>
      <select
        id="taskFilter"
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
    </>
  );
};
