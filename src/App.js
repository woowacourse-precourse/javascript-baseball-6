import { printStartApp } from './print.js';
import main from './main.js';

class App {
  async play() {
    printStartApp();
    await main();
  }
}

export default App;
