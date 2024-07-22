import { FC } from 'react';
import {
  navigationItemsType,
  navigationItemType,
} from '../../../../types/navigationItemsType';
type Props = {
  items: navigationItemsType;
  current: navigationItemType;
  handleClick: (item: navigationItemType) => void;
};

export const NavigationButton: FC<Props> = ({
  items,
  current,
  handleClick,
}) => {
  return (
    <div className="flex gap-2">
      {items.map((item) => (
        <button
          key={item}
          className={` ${current === item && 'bg-gray-200'} rounded-md px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200`}
          onClick={() => handleClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
