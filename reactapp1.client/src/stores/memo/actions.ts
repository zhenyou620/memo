import { createAction } from '@reduxjs/toolkit';

const FEATURE = 'memo';

export const added = createAction(`${FEATURE}/add`);
export const deleted = createAction(`${FEATURE}/delete`);
