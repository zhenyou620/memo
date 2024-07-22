import { createContext } from 'react';
import { navigationItemType } from '@/types/navigationItemsType';

export interface NavigationContext {
  current: navigationItemType;
  updateCurrent: (item: navigationItemType) => void;
}

export const navigationContext = createContext<NavigationContext>({} as never);
