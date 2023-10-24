import GameView from "./gameView.js";
import GameModel from "./gameModel.js";
import GameController from "./gameController.js";
class App {
  constructor() {
    this.view = new GameView();
    this.model = new GameModel();
    this.controller = new GameController(this.model);
  }

  async play() {
    this.view.printGameStartMessage();
    try {
      await this.gameStart();
    } catch (error) {
      throw new Error(`[ERROR] ${error}`);
    }
  }

  async gameStart() {
    this.controller.updateRandomComputerNumber();
    await this.userInput();
  }
  async userInput() {
    while (true) {
      const userNumber = await this.view.getUserNumberInput();
      const isValidated = this.controller.inputValidation(userNumber);
      if (isValidated) this.model.updateUserNumber(userNumber);
      else if (isValidated === false) throw new Error("숫자가 잘못된 형식입니다.");
    }
  }
}

const app = new App();
app.play();

export default App;
