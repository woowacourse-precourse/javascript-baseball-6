import {RANDOM} from './module.js';
import {USER} from './module.js';
class App {
  async play() {
    RANDOM.random_create();
  }
}
const app = new App();
app.play();
export default App;
