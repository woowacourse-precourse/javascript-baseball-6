import { ANSWER_LENGTH, ERROR_MESSAGE, PLAY_GAME } from "./Constants";
import generateRandomNumber from "./utils/generateRandomNumbers";
import checkBallCount from "./utils/checkBallCount";
import printBallCount from "./utils/printBallCount";
import validateInput from "./utils/validateInput";

const { Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answer = "";
  }

  async play() {
    Console.print(PLAY_GAME.START);
    await this.gameTurn();
  }

  async gameTurn() {
    this.answer = generateRandomNumber();
    await this.gameStart();
  }

  async gameStart() {
    const inputValue = await Console.readLineAsync(PLAY_GAME.INPUT);
    if (validateInput(inputValue)) {
      const scoreCount = checkBallCount(this.answer, inputValue);
      const { strike } = scoreCount;
      printBallCount(scoreCount);

      if (strike === ANSWER_LENGTH) {
        Console.print(PLAY_GAME.ANSWER);
        return this.restartGame();
      }
    } else {
      Console.print(ERROR_MESSAGE);
    }

    return this.gameStart();
  }

  async restartGame() {
    const input = await Console.readLineAsync(PLAY_GAME.CHECK);

    if (input === PLAY_GAME.RESTART) {
      this.answer = generateRandomNumber();
      return this.gameStart();
    }

    if (input === PLAY_GAME.END) {
      Console.print(PLAY_GAME.ENDMESSAGE);
    } else {
      Console.print(ERROR_MESSAGE);
      return this.restartGame();
    }
  }
}

export default App;
