import type { FC, PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { memoSlice } from './stores/memo';

const store = configureStore({ reducer: memoSlice.reducer });

const Providers: FC<PropsWithChildren> = ({ children }) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
);

export default Providers;
