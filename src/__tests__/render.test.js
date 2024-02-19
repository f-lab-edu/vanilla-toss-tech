import { getByText } from '@testing-library/dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Main from '@/components/main.js';

describe('main.js', () => {
  beforeEach(() => {
    // mocking할 데이터 작성
    vi.spyOn(Main.prototype, 'addEvent');
    const addEventMock = {
      addEventListener: vi.fn().mockImplementation((event, handler) => {
        handler(event);
      }),
    };
    document.querySelector = vi.fn().mockReturnValue(addEventMock);
  });

  it('should be rendered main.js', () => {
    const title = '개발';
    // await server.use(handlers[0]);
    new Main({ $target: document.body });
    expect(getByText(document.body, title)).toBeInTheDocument();
  });
});
