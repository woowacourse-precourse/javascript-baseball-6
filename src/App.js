import { printStartApp } from './print.js';
import main from './main.js';

class App {
  async play() {
    const NUMBERS_LENGTH = 3;
    printStartApp();
    await main(NUMBERS_LENGTH);
  }
}

export default App;
