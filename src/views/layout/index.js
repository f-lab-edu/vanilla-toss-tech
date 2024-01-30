import Component from '../../core/Component.js';

export default class Layout extends Component {
  template() {
    return `
    <nav >
      <ul style="height: 60px; background-color: pink">
        <div class="router_section">
          <li>
            <a href="/design">디자인</a>
          </li>
          <li>
            <a href="/tech">개발</a>
          </li>
        </div>
        <li>
          <a href="https://toss.im/career/jobs" target="_blank">채용 바로가기</a>
        </li>
      </ul>
    </nav>
    <main></main>
    <footer style="height: 60px; background-color: pink">footer자리</footer>
  `;
  }
}
