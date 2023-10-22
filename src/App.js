import { pickRandomNumber, judgeNumber, endGame } from "./computer.js";
import { enterNumber } from "./player.js";

class App {
  async play() {
    const computerNum = pickRandomNumber();
    // enterNumber(number);
    // judgeNumber(number);
    // endGame();
  }
}

export default App;

const app = new App();
app.play();