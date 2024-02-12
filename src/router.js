import Component from '@/core/Component.js';
import Main from '@/components/main.js';
import Article from '@/pages/article.js';
import NotFound from '@/pages/notFound.js';
import { navigate } from './navigate';

const routes = [
  { path: /^\/$/, element: Main },
  { path: /^\/tech$/, element: Main },
  { path: /^\/design$/, element: Main },
  { path: /^\/article\/[\w]+$/, element: Article },
];

export default class Router extends Component {
  findMatchedRoute() {
    return routes.find((route) => route.path.test(location.pathname));
  }

  /**
   * 현재 URL에 대응하는 컴포넌트 렌더링
   * @returns component
   */
  navigate() {
    const containerPage = this.findMatchedRoute()?.element || NotFound;
    new containerPage(this.$container);
  }

  /**
   * 라우터 동작의 초기 설정
   */
  start() {
    window.addEventListener('historychange', ({ detail }) => {
      const { to, isReplace } = detail;
      if (isReplace || to === location.pathname)
        history.replaceState(null, '', to);
      else history.pushState(null, '', to);

      this.navigate();
    });

    window.addEventListener('popstate', () => {
      this.navigate();
    });

    this.navigate();
  }
}
