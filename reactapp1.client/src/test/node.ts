import { setupServer } from 'msw/node';
import { memoHandlers } from './memoHandlers';
import { taskHandlers } from './taskHandlers';

export const server = setupServer(...taskHandlers, ...memoHandlers);
