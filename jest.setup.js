import { setupServer } from 'msw/node';
import { handlers } from '@/mocks/articleHandlers.js';
import dotenv from 'dotenv';

dotenv.config({ path: './.env.local' });

const server = setupServer(...handlers);

beforeAll(() => {
  // Start the interception.
  server.listen({ onUnhandledRequest: 'warn' });
});

afterEach(() => {
  // Remove any handlers you may have added
  // in individual tests (runtime handlers).
  server.resetHandlers();
});

afterAll(() => {
  // Disable request interception and clean up.
  server.close();
});
