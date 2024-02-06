import { HttpResponse, http } from 'msw';
import articlesList from '@/mocks/articlesList.json';
import article from '@/mocks/article.json';

export const handlers = [
  http.get('/api/articles', () => {
    return HttpResponse.json(articlesList);
  }),
  http.get('/api/article/:id', () => {
    return HttpResponse.json(article);
  }),
];
