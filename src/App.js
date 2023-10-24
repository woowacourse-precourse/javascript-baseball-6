import { ANSWER_LENGTH, ERROR_MESSAGE, PLAY_GAME } from "./Constants";
import generateRandomNumber from "./utils/generateRandomNumbers";
import checkBallCount from "./utils/checkBallCount";
import printBallCount from "./utils/printBallCount";

const { Console } = require("@woowacourse/mission-utils");

class App {
  async play() {
    Console.print(PLAY_GAME.START);
    await this.gameTurn();
  }

  async gameTurn() {
    const randomNumber = generateRandomNumber();
    await this.gameStart(randomNumber);
  }

  async gameStart(answer) {
    try {
      while (true) {
        const inputNumber = await Console.readLineAsync(PLAY_GAME.INPUT);
        const score = checkBallCount(inputNumber, answer);
        Console.print(printBallCount(score));

        if (score.strike === ANSWER_LENGTH) {
          Console.print(PLAY_GAME.ANSWER);
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
    Console.print(PLAY_GAME.ANSWER);
    let input = await Console.readLineAsync(PLAY_GAME.CHECK);
    if (input === PLAY_GAME.RESTART) {
      return this.gameTurn();
    } else if (input === PLAY_GAME.END) {
      return Console.print(PLAY_GAME.ENDMESSAGE);
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
