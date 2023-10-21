import {RANDOM} from './module.js';
import {game} from './module.js';
import {start} from './module.js';

class App {
  async play() {
    RANDOM.random_create();
    start();
    game();
  }
}
const app = new App();
app.play();

export default App;
