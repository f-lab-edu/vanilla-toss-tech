import Component from '@/core/Component.js';
import style from '@/styles/components/main.module.css';
import { fetchData } from '@/apis/index.js';
import { navigate } from '@/navigate.js';
import { formatDate } from '@/utils';

function handleClickItem(e) {
  e.preventDefault();
  const targetElement = e.target.closest('li');
  const articleId = targetElement.id;
  navigate(`/article/${articleId}`);
}

export default class Main extends Component {
  constructor() {
    super(document.querySelector('main'));
  }

  setup() {
    this.$state = {
      articles: {},
    };
  }

  template() {
    return `
      <span class="${style.main__subject}">개발</span>
      <ul class="${style.main__list}"></ul>
      `;
  }

  async mounted() {
    await this.fetchArticles();
    window.scrollTo(0, 0);
    const $main__list = this.$target.querySelector('ul');
    Object.entries(this.$state.articles).forEach(([id, content]) => {
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
          <p class="${style.main__date}">${formatDate(createdDate)}</p>
        </div>
      </a>
    `;
    return article;
  }

  async fetchArticles() {
    try {
      const result = await fetchData('/articles');
      this.$state.articles = result.articles;
    } catch (e) {
      console.error('error from main.js : ', e);
    }
  }

  setEvent() {
    this.addEvent('click', 'ul', (e) => {
      e.preventDefault();
      const targetElement = e.target.closest('li');
      const articleId = targetElement.id;
      navigate(`/article/${articleId}`);
    });
  }
}
