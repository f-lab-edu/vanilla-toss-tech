import { HttpResponse, http } from 'msw';
import getArticlesList from '@/mocks/getArticlesList.json';

export const handlers = [
  http.get('/api/articles', () => {
    return HttpResponse.json(getArticlesList);
  }),
  // http.get('/api/article/:id', (_, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(getArticleHandler));
  // }),
];
