import { server } from '@/mocks/server';
import { beforeAll, afterEach, afterAll } from 'vitest';
import dotenv from 'dotenv';

dotenv.config({ path: './.env.local' });

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
