import Component from '../core/Component.js';
import style from '../styles/pages/index.module.css';
import Header from '../components/layout/header.js';
import Footer from '../components/layout/footer.js';
import Banner from '../components/layout/banner.js';
import Main from '../components/main.js';

export default class Home extends Component {
  template() {
    return `
      <header class="${style.home__header}"></header>
      <main class="${style.home__main}">
        <span class="${style.home__title}">개발</span>
        <section></section>
      </main>
      <banner></banner>
      <footer></footer>
      `;
  }

  mounted() {
    const $header = document.querySelector('header');
    const $main = document.querySelector('section');
    const $banner = document.querySelector('banner');
    const $footer = document.querySelector('footer');

    new Header($header);
    new Main($main);
    new Banner($banner);
    new Footer($footer);
  }
}
