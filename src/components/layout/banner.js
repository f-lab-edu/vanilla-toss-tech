import Component from '../../core/Component.js';
import style from '../../styles/components/layout/banner.module.css';

export default class Banner extends Component {
  template() {
    return `
      <section class="${style.banner}">
        <div class="${style.banner__container}">
          <img src="https://static.toss.im/3d/website_code_blue_alpha.png" alt="website-code-blue" class="${style.banner__container_img}">
          <div class="${style.banner__context}">
              <h3 class="${style.banner__title}">토스팀이 만드는 수많은 혁신의 순간들</h3>
              <div class="${style.banner__text}">당신과 함께 만들고 싶습니다.<br>지금, 토스팀에 합류하세요.</div>
              <a class="${style.banner__button}" aria-disabled="false" href="https://toss.im/career/jobs?gh_src=38b73b7a3us">채용 중인 공고 보기</a>
          </div>
        </div>
      </section>
  `;
  }
}
