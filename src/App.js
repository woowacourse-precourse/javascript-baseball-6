import { pickRandomNumber, judgeNumber, endGame } from "./computer.js";
import { enterNumber } from "./player.js";

class App {
  async play() {
    let isRunning = true;
    
    while(isRunning == true) {
      const computerNum = pickRandomNumber();
      console.log(computerNum);
      await enterNumber();
      // judgeNumber(number);
      // isRunning = await endGame();
      isRunning = false; // 임시
    }
  }
}

export default App;

const app = new App();
app.play();