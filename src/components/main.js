import Component from '@/core/Component.js';
import style from '@/styles/components/main.module.css';
import { fetchData } from '@/apis/index.js';
import articlesList from '@/mocks/articlesList.json';
import Router from '@/router.js';

export default class Main extends Component {
  constructor() {
    super(document.querySelector('main'));
  }

  template() {
    return `
      <span class="${style.main__subject}">개발</span>
      <ul class="${style.main__list}">
      </ul>
      `;
  }

  mounted() {
    const $main__list = this.$target.querySelector('ul');
    Object.entries(articlesList.articles).forEach(([id, content]) => {
      $main__list.prepend(this.createListElement({ id, ...content }));
    });
  }

  createListElement(props) {
    const { createdDate, id, summary, title, imageUrl } = props;
    const article = document.createElement('li');
    article.id = id;
    article.className = style.main__item;
    article.innerHTML = `
      <a class="${style.main__container}">
        <img alt="썸네일 이미지" src="${imageUrl}" />
        <div>
          <span class="${style.main__title}">
            <p>${title}</p>
          </span>
          <span class="${style.main__summary}">
            <p>${summary}</p>
          </span>
          <p class="${style.main__date}">${createdDate}</p>
        </div>
      </a>
    `;
    return article;
  }

  async getArticlesList() {
    const result = await fetchData('/articles', { method: 'GET' });
    if (!result) return null;

    return result.articles;
  }

  setEvent() {
    this.addEvent('click', 'li > a', (e) => {
      const targetElement = e.target.closest('li');
      const articleId = targetElement.id;

      window.history.pushState('', '', `/article/${articleId}`);
      const $container = document.querySelector('#app');
      const router = new Router($container);
      router.start();
    });
  }
}
