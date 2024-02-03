import Component from '../core/Component.js';
import style from '../styles/pages/index.module.css';
import Header from '../components/layout/header.js';
import ArticleDetail from '../components/articleDetail.js';
import Banner from '../components/layout/banner.js';
import Footer from '../components/layout/footer.js';

export default class Article extends Component {
  template() {
    return `
      <header class="${style.home__header}"></header>
      <article class="${style.home__main}"></article>
      <banner></banner>
      <footer></footer>
      `;
  }

  mounted() {
    const $header = document.querySelector('header');
    const $article = document.querySelector('article');
    const $banner = document.querySelector('banner');
    const $footer = document.querySelector('footer');

    new Header($header);
    new ArticleDetail($article);
    new Banner($banner);
    new Footer($footer);
  }
}
