import GameController from "./controllers/GameController.js";
import GameModel from "./models/GameModel.js";
import GameView from "./view/GameView.js";

class App {
  constructor() {
    this.model = new GameModel();
    this.controller = new GameController();
    this.view = new GameView();
  }
  async play() {
    let computerAnswer = this.model.getComputerAnswer();
    while (true) {
      const userInput = await this.view.readUserInput();
      let userAnswer = this.controller.handleUserAnswer(userInput);

      if (computerAnswer === userAnswer) {
        this.model.getHint(computerAnswer, userAnswer);
        this.view.printGameWin();

        const replay = await this.view.readReplayInput();
        if (replay === "1") {
          computerAnswer = this.model.getComputerAnswer();
          continue;
        } else if (replay === "2") {
          this.view.printGameOver;
          break;
        } else {
          this.view.printError();
        }
      }
      this.model.getHint(computerAnswer, userAnswer);
    }
  }
}

const app = new App();
app.play();

export default App;
