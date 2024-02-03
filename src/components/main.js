import Component from '../core/Component.js';
import style from '../styles/components/main.module.css';

export default class Main extends Component {
  template() {
    return `
      <ul class="${style.main__list}">
        <li class="${style.main__item}">
          <a class="${style.main__container}">
            <img alt="썸네일 이미지" src="https://static.toss.im/assets/payments/contents/writer-2-thumb.jpg" />
            <div>
              <span class="${style.main__title}">
                그 많은 개발 문서는 누가 다 만들었을까 (2) 개발자의 학습을 돕는 모든 것
              </span>
              <span class="${style.main__summary}">
                토스의 테크니컬 라이터가 하는 일에 이어, 개발자 경험 전반으로 역할을 확장해 온 이야기를 공유해요.
              </span>
              <span class="${style.main__date}">2020.01.25</span>
            </div>
          </a>
        </li>
        <li class="${style.main__item}">
          <a class="${style.main__container}">
            <img alt="썸네일 이미지" src="https://static.toss.im/assets/payments/contents/writer-thumb.jpg" />
            <div>
              <span class="${style.main__title}">
                그 많은 개발 문서는 누가 다 만들었을까 (1) 개발자의 학습을 돕는 모든 것
              </span>
              <span class="${style.main__summary}">
                토스의 테크니컬 라이터가 하는 일에 이어, 개발자 경험 전반으로 역할을 확장해 온 이야기를 공유해요.
              </span>
              <span class="${style.main__date}">2020.01.23</span>
            </div>
        </a>
        </li>
      </ul>
      `;
  }
}
