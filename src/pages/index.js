import Component from '@/core/Component.js';
import style from '@/styles/pages/index.module.css';
import Header from '@/components/layout/header.js';
import Footer from '@/components/layout/footer.js';
import Banner from '@/components/layout/banner.js';

export default class Home extends Component {
  constructor($target) {
    super($target);
    this.$newEl = $target.cloneNode(true);
    this.$newEl.innerHTML = this.template();
    $target.replaceWith(this.$newEl);
  }

  template() {
    return `
      <header class="${style.home__header}"></header>
      <main class="${style.home__main}"></main>
      <banner></banner>
      <footer></footer>
      `;
  }

  mounted() {
    const $header = document.querySelector('header');
    const $banner = document.querySelector('banner');
    const $footer = document.querySelector('footer');

    new Header($header);
    new Banner($banner);
    new Footer($footer);
  }
}
