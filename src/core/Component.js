export default class Component {
  $target;

  $props;

  $state;

  $attacthedEventListeners;

  constructor($target, $props) {
    this.$attacthedEventListeners = [];
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.setEvent();
    this.render();
  }

  /**
   * 컴포넌트 state 설정
   */
  setup() {
    // 추상화를 위한 메서드
  }

  /**
   * 컴포넌트가 마운트 되었을 때의 설정
   */
  mounted() {
    // 추상화를 위한 메서드
  }

  /**
   * UI
   * @returns template
   */
  template() {
    return '';
  }

  /**
   * UI 렌더링
   */
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  /**
   * 컴포넌트에서 필요한 이벤트 설정
   */
  setEvent() {
    // 추상화를 위한 메서드
  }

  removeEvent() {
    for (let { eventType, listener } of this.$attacthedEventListeners) {
      this.$target.removeEventListener(eventType, listener);
    }
    this.$attacthedEventListeners = [];
  }
  unmounted() {
    this.removeEvent();
  }
  /**
   * 상태 변경 후 렌더링
   * @param {*} newState
   */
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }

  /**
   * 이벤트 등록 후 추상화
   * @param {*} eventType
   * @param {*} selector
   * @param {*} callback
   */
  addEvent(eventType, selector, callback) {
    const listener = (e) => {
      if (e.target.closest(selector)) callback(e);
    };
    this.$target.addEventListener(eventType, listener);
    this.$attacthedEventListeners.push({ eventType, listener });
  }
}
