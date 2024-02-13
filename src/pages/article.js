import Component from '@/core/Component.js';
import styles from '@/styles/pages/article.module.css';
import { fetchData } from '@/apis/index.js';
import { formatDate } from '@/utils';

export default class Article extends Component {
  constructor() {
    super(document.querySelector('main'));
  }

  setup() {
    this.$state = {
      article: {},
    };
  }

  template() {
    return `
      <header class="article__header"></header>
      <section class="${styles.article__container}"></section>
      `;
  }

  async mounted() {
    await this.fetchArticle();
    window.scrollTo(0, 0);
    const $header = document.querySelector('.article__header');
    const $section = document.querySelector('section');
    const {
      imageUrl,
      emojiUrl,
      title,
      editorName,
      shortDescription,
      createdDate,
      body,
    } = this.$state.article;
    $header.innerHTML = `
      <img class="${styles.article__img}" src="${imageUrl}" alt="썸네일"/>
      <h1 class=${styles.article__title}>${title}</h1>
      <section class="${styles.article__author_container}">
        <img src="${emojiUrl}"/>
        <div class="${styles.article__author_inner}">
            <div class="${styles.article__author}">
              <span class="${styles.article__author_text}">${editorName}</span>
              <span class="${styles.article__author_text}">ㆍ${shortDescription}</span>
            </div>
            <span class="${styles.article__date}">${formatDate(createdDate)}</span>
        </div>
      </section>`;
    $section.innerHTML = `
      <p>
        <span>${body}</span>
      </p>
    `;
  }

  async fetchArticle() {
    try {
      const result = await fetchData('/article/1');
      this.$state.article = result;
    } catch (e) {
      console.error('error from article.js : ', e);
    }
  }
}
