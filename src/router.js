import Component from './core/Component.js';

export default class Router extends Component {
  /**
   * router의 초기값을 설정
   */
  setup() {
    this.$state = {
      routes: [],
      currentPath: null,
    };
  }

  /**
   * 라우터 등록
   * @param {*} fragment URL
   * @param {*} component 렌더링 할 컴포넌트
   */
  addRoute(fragment, component) {
    const params = [];
    const ROUTE_PARAMETER_REGEXP = /:(\w+)/g;
    const URL_REGEXP = '([^\\/]+)';

    const parsedFragment = fragment
      .replace(ROUTE_PARAMETER_REGEXP, (_, paramName) => {
        params.push(paramName);
        return URL_REGEXP;
      })
      .replace(/\//g, '\\/');

    this.$state.routes.push({
      fragmentRegExp: new RegExp(`^${parsedFragment}$`),
      component,
      params,
    });
  }

  /**
   * URL의 쿼리 매개변수를 추출
   * @param {*} route
   * @param {*} params
   * @returns
   */
  static getUrlParams(route, path) {
    const params = {};
    const matches = path.match(route.fragmentRegExp);
    matches.shift();
    matches.forEach((paramValue, index) => {
      const paramName = route.params[index];
      params[paramName] = paramValue;
    });
    // params = {name: 'IU', song: 'raindrop'}
    return params;
  }

  /**
   * 현재 URL에 대응하는 컴포넌트 렌더링
   * @returns component
   */
  navigate() {
    const { pathname } = window.location;
    if (this.$state.currentPath === pathname) return;

    const currentRoute = this.$state.routes.find((route) => {
      const { fragmentRegExp } = route;
      return fragmentRegExp.test(pathname);
    });

    if (!currentRoute) {
      this.notFound();
      return;
    }

    this.$state.currentPath = pathname;

    const urlParams = Router.getUrlParams(currentRoute, pathname);
    currentRoute.component(urlParams);
  }

  /**
   * 현재 URL에 대응하는 페이지가 없을 경우 notFound컴포넌트 렌더링
   * @param {*} component
   * @returns notFound component
   */
  setNotFound(component) {
    this.notFound = component;
    return this;
  }

  /**
   * 라우터 동작의 초기 설정
   */
  start() {
    window.addEventListener('popstate', this.navigate());
  }
}
