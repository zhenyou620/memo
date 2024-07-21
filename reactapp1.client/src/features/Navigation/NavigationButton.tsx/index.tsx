import { FC, MouseEventHandler } from 'react';
import { navigationItemsType } from '../types/navigationItemsType';

type Props = {
  items: navigationItemsType;
  handleClick: (event: MouseEventHandler<HTMLButtonElement>) => void;
};

export const NavigationButton: FC<Props> = ({ items, handleClick }) => {
  return (
    <div>
      {items.map((item) => (
        <button
          key={item}
          className="rounded-md px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
          onClick={() => handleClick}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
