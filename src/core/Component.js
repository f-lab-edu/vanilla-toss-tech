export default class Component {
  $target;

  $props;

  $state;

  $attachedEventListeners;

  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.$attachedEventListeners = [];
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
   * 컴포넌트가 언마운트 되었을 때의 설정
   */
  unmounted() {
    this.removeEvent();
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
    const listener = (event) => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    };
    this.$target.addEventListener(eventType, listener);
    this.$attachedEventListeners.push({ eventType, listener });
  }

  /**
   * 이벤트 리스너 제거
   */
  removeEvent() {
    for (let { eventType, listener } of this.$attachedEventListeners) {
      this.$target.removeEventListener(eventType, listener);
    }

    this.$attachedEventListeners = [];
  }
}
