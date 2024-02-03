import Component from '../core/Component.js';
import styles from '../styles/pages/article.module.css';

export default class Article extends Component {
  constructor() {
    super(document.querySelector('main'));
  }

  template() {
    return `
      <header>
        <img class="${styles.article__img}" src="https://static.toss.im/career-resource/og-image.png" alt="썸네일"/>
        <h1 class=${styles.article__title}>프론트엔드 로깅 신경 안 쓰기</h1>
        <section class="${styles.article__author_container}">
          <img src="https://static.toss.im/2d-emojis/png/4x/u263A.png"/>
          <div class="${styles.article__author_inner}">
              <div class="${styles.article__author}">
                <span class="${styles.article__author_text}">김토스</span>
                <span class="${styles.article__author_text}">ㆍ Frontend Developer</span>
              </div>
              <span class="${styles.article__date}">2014.2.2</span>
          </div>
        </section>
      <header>
      <section class="${styles.article__container}">
        <p>
          <span>제품을 개발하다 보면 사용자가 어떻게 제품을 사용하는지, 제품을 사용할 때 어떤 행동을 했는지 알아야 할 때가 있어요. 그래서 우리는 로그 데이터를 사용해요. 로그를 기록하는 것을 '로깅'이라고 하는데요. 로깅으로 수집한 데이터로 사용자의 행동을 분석하거나, A/B 테스트의 결과를 확인하거나, 재현하기 어려운 환경에서 디버깅 할 수 있어요.</span>
        </p>
        <p>
          <span>이번 글에서는 토스페이먼츠 프론트엔드 챕터에서 로깅 방법을 개선한 과정을 소개해 볼게요.</span>
        </p>
      </section>
      `;
  }
}
