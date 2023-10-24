import getInputAndCheck from "./model/getInputAndCheck.js";
import printResult from "./model/printResult.js";
import restartGame from "./model/restartGame.js";
import ballCount from "./util/ballCount.js";
import ballNumberMaker from "./util/ballNumberMaker.js";
import ConsoleView from "./util/ConsoleControll.js";

class App {
  async play() {
    let computerNumbers = ballNumberMaker();
    let userNumbers;
    while (true) {
      userNumbers = await getInputAndCheck();

      if (printResult(ballCount(userNumbers, computerNumbers))) {
        const RESTART = await restartGame();
        if (RESTART) {
          computerNumbers = ballNumberMaker();
        } else {
          break;
        }
      }
    }
  }
}

export default App;

ConsoleView.printStart();

// const app = new App();
// app.play();
