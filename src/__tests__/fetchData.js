import { fetchData } from '@/apis/index.js';
import articlesList from '@/mocks/articlesList.json';
import article from '@/mocks/article.json';

describe('test fetch data', () => {
  it('should return articlesList.json if url is "/article"', async () => {
    const result = await fetchData('/articles');
    expect(result).toEqual(articlesList);
  });

  it('should return article.json if path is "/article/1"', async () => {
    const result = await fetchData('/article/1');
    expect(result).toEqual(article);
  });
});
