import { HttpResponse, http } from 'msw';
import techArticlesList from '@/mocks/techArticlesList.json';
import designArticlesList from '@/mocks/designArticlesList.json';
import article from '@/mocks/article.json';
import { ARTICLE_TYPE } from '@/constants';

export const handlers = [
  http.get('/api/articles', ({ request }) => {
    const url = new URL(request.url);
    const articleType = url.searchParams.get('articleType');
    return HttpResponse.json(
      articleType === ARTICLE_TYPE.TECH
        ? techArticlesList
        : articleType === ARTICLE_TYPE.DESIGN
          ? designArticlesList
          : [],
    );
  }),
  http.get('/api/articles', () => {
    return HttpResponse.json(techArticlesList);
  }),
  http.get('/api/article/:id', () => {
    return HttpResponse.json(article);
  }),
];
