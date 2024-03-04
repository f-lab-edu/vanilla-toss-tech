import logo from '@/assets/logo-image.png';
import Component from '@/core/Component.js';
import style from '@/styles/components/layout/header.module.css';
import { navigate } from '@/navigate.js';

export default class Header extends Component {
  template() {
    return `
    <nav class="${style.navbar}">
      <div class="${style.navbar__wrap}">
        <div class="${style.logo__container}">
          <a href="/tech" aria-label="토스 기술 블로그, 토스테크">
            <img src="${logo}" width="120" height="35" alt="로고 이미지" />      
          </a>
        </div>
        <ul class="${style.navbar__menu}">
          <li class="${style.navbar__item}">
            <a href="/design">디자인</a>
          </li>
          <li class="${style.navbar__item}">
            <a href="/tech">개발</a>
          </li>
          <li class="${style.navbar__item}">
            <button class="${style.navbar__button}">채용 바로가기</button>
          </li>
        </ul>
      </div>
    </nav>
  `;
  }

  setEvent() {
    this.addEvent('click', 'nav', (e) => {
      e.preventDefault();
      const target = e.target.closest('li').children[0];
      if (!target) return;

      const actionTargetTag = target.tagName.toLowerCase();
      if (actionTargetTag === 'button') {
        this.goRecruit();
      } else if (actionTargetTag === 'a') {
        const targetURL = target.href.replace(import.meta.env.VITE_BASEURL, '');
        navigate(targetURL);
      }
    });
  }

  goRecruit() {
    window.location.href = 'https://toss.im/career/jobs';
  }
}
