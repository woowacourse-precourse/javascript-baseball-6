import getInputAndCheck from "./model/getInputAndCheck.js";
import printResult from "./model/printResult.js";
import restartGame from "./model/restartGame.js";
import ballCount from "./util/ballCount.js";
import ballNumberMaker from "./util/ballNumberMaker.js";
import consoleView from "./util/consoleControll.js";

class App {
  async play() {
    let computerNumbers = ballNumberMaker();
    let userNumbers;
    do {
      userNumbers = await getInputAndCheck();
      if (printResult(ballCount(userNumbers, computerNumbers))) {
        let restart = await restartGame();
        if (restart) {
          computerNumbers = ballNumberMaker();
        } else {
          break;
        }
      }
    } while (true);
  }
}

export default App;

consoleView.printStart();

// const app = new App();
// app.play();
