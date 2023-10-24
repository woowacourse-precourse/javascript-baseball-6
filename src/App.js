import User from "./User.js";
import Game from "./Game.js";
import { message, outputMessage } from "./constants/Message.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { option } from "./constants/Enum.js";

class App {
  #user = null;
  #baseball = null;

  async play() {
    this.#user = new User(); 

    MissionUtils.Console.print(message.START_GAME);
    
    while(true) {
      if (await this.#playGame()) break;
    }
  }

  async #playGame() {
    this.#baseball = new Game();

    if (this.#baseball !== null) {
      this.#baseball.startGame();     
    }

    while(true) {
      if (await this.#playUntilStrikeOut()) break;
    }

    const retryOrEnd = await this.#user.inputRetryOrEnd();

    if (Number(retryOrEnd) === option.QUIT) {
      MissionUtils.Console.print(message.END_GAME);
      return true;
    }

    return false;
  }

  async #playUntilStrikeOut() {
    const userThreeNumber = await this.#user.inputNumber();
    const gameResult = this.#baseball.makeComputerGrade(userThreeNumber);

    this.#user.printGameResult(gameResult);

    if (gameResult === outputMessage.STRIKE_OUT) {
      return true;
    }

    return false;
  }
}

export default App;
