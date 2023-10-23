import { MissionUtils } from "@woowacourse/mission-utils";
import GAME_MESSAGES from "./constants/GameMessages.js";
import SIGNS from "./constants/Signs.js";
import Computer from "./Computer.js";
import Player from "./Player.js";

class App {
  #computer;
  #player;
  constructor() {
    this.#computer = new Computer();
    this.#player = new Player();
  }

  #printMessage(message) {
    MissionUtils.Console.print(message);
  }

  #printPredictResult(strike, ball) {
    if (strike === 0 && ball === 0) {
      this.#printMessage(GAME_MESSAGES.PREDICT_RESULT.NOTHING);
      return;
    }
    const strikeMessage =
      strike === 0 ? "" : GAME_MESSAGES.PREDICT_RESULT.STRIKE(strike);
    const ballMessage =
      ball === 0 ? "" : GAME_MESSAGES.PREDICT_RESULT.BALL(ball);
    this.#printMessage(`${ballMessage}${strikeMessage}`);
  }

  async #confirmRestart() {
    const restartSign = await this.#player.getRestartSign();
    if (restartSign === SIGNS.GAME_RESTART) {
      this.#computer.resetAnswer();
      return await this.#processGame();
    } else {
      return;
    }
  }

  async #processGame() {
    const playNumber = await this.#player.getPlayerNumber();
    const [strike, ball] = this.#computer.compareNumber(playNumber);
    this.#printPredictResult(strike, ball);

    if (strike === SIGNS.PREDICT_SUCCEED) {
      this.#printMessage(GAME_MESSAGES.END);
      return await this.#confirmRestart();
    } else {
      return await this.#processGame();
    }
  }

  async play() {
    try {
      MissionUtils.Console.print(GAME_MESSAGES.START);
      await this.#processGame();
    } catch (error) {
      throw error;
    }
  }
}

const app = new App();
app.play();

export default App;
