import Router from './router.js';
import Home from './pages/index.js';
import Article from './pages/article.js';
import NotFound from './pages/notFound.js';

export default () => {
  const createPages = (container) => {
    const home = () => new Home(container);
    const article = () => new Article(container);
    const notFound = () => new NotFound(container);
    return {
      home,
      article,
      notFound,
    };
  };

  const createRouter = (container) => {
    const pages = createPages(container);
    const router = new Router(container);
    router.addRoute('/', pages.home);
    router.addRoute('/tech', pages.home);
    router.addRoute('/design', pages.home);
    router.addRoute('/article/:id', pages.article);
    router.setNotFound(pages.notFound);
    return router;
  };

  const start = () => {
    const container = document.querySelector('#app');
    createRouter(container).start();
  };

  document.addEventListener('DOMContentLoaded', start);
};
