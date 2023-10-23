import { Console } from "@woowacourse/mission-utils";
import { ANSWER_LENGTH, ERROR_MESSAGE, PLAY_GAME } from "./Constants";
import checkBallCount from "./utils/checkBallCount";
import printBallCount from "./utils/printBallCount";
import validateInput from "./utils/validateInput";
import generateRandomNumber from "./utils/generateRandomNumber";

class App {
  constructor() {
    this.answer = "";
  }

  async play() {
    Console.print(PLAY_GAME.start);
    await this.gameTurn();
  }

  async gameTurn() {
    this.answer = generateRandomNumber();
    await this.gameStart();
  }

  async gameStart() {
    const inputValue = await Console.readLineAsync(PLAY_GAME.input);
    if (validateInput(inputValue)) {
      const scoreCount = checkBallCount(this.answer, inputValue);
      const { strike } = scoreCount;
      printBallCount(scoreCount);

      if (strike === ANSWER_LENGTH) {
        Console.print(PLAY_GAME.answer);
        return this.restartGame();
      }
    } else {
      Console.print(ERROR_MESSAGE);
    }

    return this.gameStart();
  }

  async restartGame() {
    const input = await Console.readLineAsync(PLAY_GAME.check);

    if (input === PLAY_GAME.restart) {
      this.answer = generateRandomNumber();
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
