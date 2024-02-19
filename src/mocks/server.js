import { setupServer } from 'msw/node';
import { handlers } from '@/mocks/articleHandlers.js';

export const server = setupServer(...handlers);
