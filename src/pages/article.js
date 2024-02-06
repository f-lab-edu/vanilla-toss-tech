import Component from '@/core/Component.js';
import styles from '@/styles/pages/article.module.css';
import article from '@/mocks/article.json';
import { formatDate } from '@/utils';

export default class Article extends Component {
  constructor() {
    super(document.querySelector('main'));
  }

  template() {
    return `
      <header class="article__header"></header>
      <section class="${styles.article__container}"></section>
      `;
  }

  mounted() {
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
    } = article['1'];
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
}
