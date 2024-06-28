import type { FC, PropsWithChildren } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider as ReduxProvider } from 'react-redux';
import { memoSlice } from '../fetures/Memo/stores/memo';

const store = configureStore({ reducer: memoSlice.reducer });

const Providers: FC<PropsWithChildren> = ({ children }) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
);

export default Providers;
