import { Console } from "@woowacourse/mission-utils";
import GameController from "./controllers/GameController.js";
import GameModel from "./models/GameModel.js";
import GameView from "./view/gameView.js";

class App {
  constructor() {
    this.model = new GameModel();
    this.controller = new GameController();
    this.view = new GameView();
  }
  async play() {
    let computerAnswer = this.model.getComputerAnswer();
    while (true) {
      Console.print(computerAnswer);
      const userInput = await this.view.readUserInput();
      let userAnswer = this.controller.handleUserAnswer(userInput);

      //게임 승리 판정
      if (computerAnswer === userAnswer) {
        this.model.getHint(computerAnswer, userAnswer);
        this.view.printGameWin();

        //게임 매니저
        const replay = await this.view.readReplayInput();
        if (replay === "1") {
          computerAnswer = this.model.getComputerAnswer();
          continue;
        } else if (replay === "2") {
          this.view.printGameOver;
          break;
        } else {
          //   throw new Error("[ERROR] 잘못된 입력입니다.");
          throw new Error("[ERROR] 잘못된 입력입니다.");
        }
      }
      this.model.getHint(computerAnswer, userAnswer);
    }
  }
}

const app = new App();
app.play();

export default App;
