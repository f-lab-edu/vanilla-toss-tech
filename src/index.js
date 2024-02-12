import '@/styles/reset.css';
import '@/styles/root.module.css';
import App from '@/app.js';
import { initMocks } from '@/mocks/index.js';

const init = () => {
  const hasMocks = initMocks();
  if (hasMocks) {
    const $app = document.querySelector('#app');
    new App({
      $container: $app,
    });
  }
};

document.addEventListener('DOMContentLoaded', init);
