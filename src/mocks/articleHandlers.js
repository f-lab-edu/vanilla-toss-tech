import { HttpResponse, http } from 'msw';
import techArticleList from '@/mocks/tech-articles-list.json';
import designArticleList from '@/mocks/design-articles-list.json';
import article from '@/mocks/article.json';
import { ARTICLE_TYPE } from '@/constants';

export const handlers = [
  http.get('/api/articles', ({ request }) => {
    const url = new URL(request.url);
    const articleType = url.searchParams.get('articleType');
    return HttpResponse.json(
      articleType === ARTICLE_TYPE.TECH
        ? techArticleList
        : articleType === ARTICLE_TYPE.DESIGN
          ? designArticleList
          : [],
    );
  }),
  http.get('/api/articles', () => {
    return HttpResponse.json(techArticleList);
  }),
  http.get('/api/article/:id', () => {
    return HttpResponse.json(article);
  }),
];
