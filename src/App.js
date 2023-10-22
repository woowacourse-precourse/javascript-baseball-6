import GameModel from "./model.js";
import GameView from "./View.js";
import GameController from "./controller.js";

class App {
  constructor() {
    this.model = new GameModel();
    this.view = new GameView();
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
    const userNumber = await this.view.getUserNumberInput();
    const isValidated = this.controller.inputValidation(userNumber);
    if (isValidated) this.model.updateUserNumber(userNumber);
    else if (isValidated === false) throw new Error("숫자가 잘못된 형식입니다.");
    await this.scoreCheck();
  }

  async scoreCheck() {
    const [ball, strike] = this.controller.getScore();
    const scoreString = this.controller.scoreToString(ball, strike);
    this.view.printScore(scoreString);
    if (strike === 3) this.gameClear();
    else if (strike !== 3) await this.userInput();
  }

  async gameClear() {
    const isRestart = await this.view.getUserRestartInput();
    if (isRestart === "1") await this.gameStart();
    else if (isRestart !== "2") await this.gameClear();
  }
}

const app = new App();
app.play();
export default App;
