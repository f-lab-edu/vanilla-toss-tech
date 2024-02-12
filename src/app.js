import Router from '@/router.js';
import Home from '@/pages/index.js';

function App({ $container }) {
  this.$container = $container;

  const init = () => {
    const home = new Home($container);
    home.render();

    const router = new Router($container);
    router.start();
  };

  init();
}

export default App;
