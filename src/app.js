import Router from './router.js';
import Layout from './views/layout/index.js';
import Main from './views/main/index.js';
import Article from './views/article/index.js';
import NotFound from './views/notFound/index.js';

const createPages = (container) => {
  const main = () => new Main(container);
  const article = () => new Article(container);
  const notFound = () => new NotFound(container);
  return {
    main,
    article,
    notFound,
  };
};

const start = () => {
  const container = document.querySelector('#app');
  // eslint-disable-next-line no-new
  new Layout(container);
  const router = new Router(container);
  const pages = createPages(container);
  router.addRoute('/', pages.main);
  router.addRoute('/tech', pages.main);
  router.addRoute('/design', pages.main);
  router.addRoute('/article/:id', pages.article);
  router.setNotFound(pages.notFound);
  router.start();
};

document.addEventListener('DOMContentLoaded', start);
