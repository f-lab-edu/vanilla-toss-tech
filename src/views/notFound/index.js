import Component from '../../core/Component.js';

export default class NotFound extends Component {
  constructor() {
    super(document.querySelector('#app'));
  }

  template() {
    return `<div>Error Page</div>`;
  }
}
