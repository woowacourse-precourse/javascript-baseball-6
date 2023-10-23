import { ANSWER_LENGTH, ERROR_MESSAGE, PLAY_GAME } from "./Constants";
import checkBallCount from "./utils/checkBallCount";
import makeRandomNumber from "./utils/makeRandomNumber";
import printBallCount from "./utils/printBallCount";

const { Console } = require("@woowacourse/mission-utils");

class App {
  async play() {
    Console.print(PLAY_GAME.start);
    await this.gameTurn();
  }

  async gameTurn() {
    const randomNumber = makeRandomNumber();
    await this.gameStart(randomNumber);
  }

  async gameStart(answer) {
    try {
      while (true) {
        const inputNumber = await Console.readLineAsync(PLAY_GAME.input);
        const score = checkBallCount(inputNumber, answer);
        Console.print(printBallCount(score));

        if (score.strike === ANSWER_LENGTH) {
          Console.print(PLAY_GAME.answer);
          this.checkAnswer();
          break;
        }
      }
    } catch (error) {
      //인풋이 올바른지 확인하는 유효성 검사 필요
      this.errorMessages();
    }
  }

  async checkAnswer() {
    Console.print(PLAY_GAME.answer);
    let input = await Console.readLineAsync(PLAY_GAME.check);
    if (input === PLAY_GAME.restart) {
      return this.gameTurn();
    } else if (input === PLAY_GAME.end) {
      return Console.print(PLAY_GAME.endMessage);
    }
    return this.errorMessages();
  }

  async errorMessages() {
    throw new Error(ERROR_MESSAGE);
  }
}

const app = new App();
app.play();

export default App;
