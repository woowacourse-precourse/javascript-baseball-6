import { ANSWER_LENGTH, ERROR_MESSAGE, PLAY_GAME } from "./Constants";
import checkBallCount from "./utils/checkBallCount";
import makeRandomNumber from "./utils/makeRandomNumber";
import printBallCount from "./utils/printBallCount";
import inputvalidCheck from "./utils/inputvalidCheck";

const { Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answer = "";
  }

  async play() {
    Console.print(PLAY_GAME.start);
    await this.gameTurn();
  }

  async gameTurn() {
    this.answer = makeRandomNumber();
    await this.gameStart();
  }

  async gameStart() {
    const inputValue = await Console.readLineAsync(PLAY_GAME.input);
    if (inputvalidCheck(inputValue)) {
      const scoreCount = checkBallCount(this.answer, inputValue);
      const { strike } = scoreCount;

      if (strike === ANSWER_LENGTH) {
        printBallCount(scoreCount);
        Console.print(PLAY_GAME.answer);
        return this.restartGame();
      }

      const message = printBallCount(scoreCount);
      Console.print(message);
    } else {
      Console.print(ERROR_MESSAGE);
    }

    return this.gameStart();
  }

  async restartGame() {
    const input = await Console.readLineAsync(PLAY_GAME.check);

    if (input === PLAY_GAME.restart) {
      this.answer = makeRandomNumber();
      return this.gameStart();
    }

    if (input === PLAY_GAME.end) {
      Console.print(PLAY_GAME.endMessage);
    } else {
      Console.print(ERROR_MESSAGE);
      return this.restartGame();
    }
  }
}

export default App;
