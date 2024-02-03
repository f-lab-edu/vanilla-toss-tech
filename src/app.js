import Router from '@/router.js';
import Home from '@/pages/index.js';
import Main from '@/components/main.js';
import Article from '@/pages/article.js';
import NotFound from '@/pages/notFound.js';

export default () => {
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

  const createRouter = (container) => {
    const pages = createPages(container);
    const router = new Router(container);
    router.addRoute('/', pages.main);
    router.addRoute('/tech', pages.main);
    router.addRoute('/design', pages.main);
    router.addRoute('/article/:id', pages.article);
    router.setNotFound(pages.notFound);
    return router;
  };

  const start = () => {
    const $container = document.querySelector('#app');
    const home = new Home($container);
    home.render();
    createRouter($container).start();
  };

  document.addEventListener('DOMContentLoaded', start);
};
