import Component from '@/core/Component.js';
import style from '@/styles/components/layout/footer.module.css';

export default class Footer extends Component {
  template() {
    return `
      <div class="${style.footer}">
        <div class="${style.footer__inner}">
          <div class="${style.footer__group_list}">
            <ul class="${style.footer__site_group}">
              <li>
                  <div class="${style.footer__site_group_title}">토스테크</div>
              </li>
              <li class="${style.footer__site_group_item}">
                  <a href="mailto:techblog@toss.im">의견 보내기</a>
              </li>
            </ul>
            <ul class="${style.footer__site_group}">
                <li>
                    <div class="${style.footer__site_group_title}">토스</div>
                </li>
                <li class="${style.footer__site_group_item}">
                    <a href="https://toss.im">홈페이지</a>
                </li>
                <li class="${style.footer__site_group_item}">
                    <a href="https://toss.im/team">회사 소개</a>
                </li>
                <li class="${style.footer__site_group_item}">
                    <a href="https://toss.im/career">채용</a>
                </li>
            </ul>
            <ul class="${style.footer__site_group}">
                <li>
                    <div class="${style.footer__site_group_title}">고객센터</div>
                </li>
                <li class="${style.footer__site_group_item}">
                    <a href="tel:1599-4905">전화: 1599-4905 (24시간 연중무휴)</a>
                </li>
                <li class="${style.footer__site_group_item}">
                    <a href="mailto:support.toss.im">이메일: support@toss.im</a>
                </li>
                <li class="${style.footer__site_group_item}">
                    <a href="https://goto.kakao.com/@toss">카카오톡: @toss</a>
                </li>
            </ul>
        </div>
        <address class="${style.footer__address}">
            <strong class="${style.footer__address__company_name}">㈜비바리퍼블리카</strong>Copyright © Viva Republica, Inc. All Rights Reserved.
        </address>
        <ul class="${style.footer__social}">
            <li class="${style.footer__social_item}">
                <a aria-label="Toss Facebook" target="_blank" href="https://www.facebook.com/toss.official">
                    <img src="https://static.toss.im/assets/homepage/safety/icn-facebook.svg" alt="Toss Facebook">
                </a>
            </li>
            <li class="${style.footer__site_group_title}">
                <a aria-label="Toss blog" target="_blank" href="https://blog.toss.im">
                    <img src="https://static.toss.im/assets/homepage/safety/icn-blog.svg" alt="Toss blog">
                </a>
            </li>
            <li class=""${style.footer__social_item}">
                <a aria-label="Toss Naver Post" target="_blank" href="https://post.naver.com/tossblog">
                    <img src="https://static.toss.im/assets/homepage/safety/icn-naver.svg" alt="Toss Naver Post">
                </a>
            </li>
            <li class=""${style.footer__social_item}">
                <a aria-label="Toss Twitter" target="_blank" href="https://twitter.com/toss__official">
                    <img src="https://static.toss.im/assets/homepage/safety/icn-twitter.svg" alt="Toss Twitter">
                </a>
            </li>
            <li class=""${style.footer__social_item}">
                <a aria-label="Toss Instagram" target="_blank" href="https://www.instagram.com/toss.im/">
                    <img src="https://static.toss.im/assets/homepage/safety/icn-instagram.svg" alt="Toss Instagram">
                </a>
            </li>
        </ul>
        </div>
        </div>
      `;
  }
}
