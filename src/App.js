import { ANSWER } from '../utils/Constants.js';
import Validator from '../utils/Validator.js';
import ComputerNumber from './ComputerNumber.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';

class App {
  #computerNumber;
  constructor() {
    OutputView.printStart();
    this.#computerNumber = ComputerNumber.generateComputerNumber();
  }
  async play() {
    while (true) {
      const answer = await InputView.readUserInput();
      const input = Validator.validateUserInput(answer);
      const table = this.#matchComputerNumber([...input].map((e) => Number(e)));
      const template = this.#makeTemplate(table);
      OutputView.printResult(template);

      if (table.STRIKE_COUNT === 3) {
        OutputView.printCorrect();
        const retryAnswer = await InputView.readRetryAnswer();
        if (retryAnswer === ANSWER.RESTART) {
          this.#computerNumber = ComputerNumber.generateComputerNumber(); // 컴퓨터 수 초기화
        }
        if (retryAnswer === ANSWER.FINISH) {
          this.#finish();
          break;
        }
      }
    }
  }

  #finish() {
    OutputView.printFinish();
  }

  #matchComputerNumber(userInput) {
    const table = {
      STRIKE_COUNT: 0,
      BALL_COUNT: 0,
    };
    userInput.forEach((userNum, userNumIndex) => {
      if (this.#computerNumber.findIndex((computerNum) => computerNum === userNum) !== -1) {
        const computerNumIndex = this.#computerNumber.findIndex((computerNum) => computerNum === userNum);
        if (userNumIndex === computerNumIndex) {
          table.STRIKE_COUNT += 1;
        } else {
          table.BALL_COUNT += 1;
        }
      }
    });
    return table;
  }

  #makeTemplate(table) {
    if (table.STRIKE_COUNT && table.BALL_COUNT) {
      return `${table.BALL_COUNT}볼 ${table.STRIKE_COUNT}스트라이크`;
    }
    if (table.STRIKE_COUNT && !table.BALL_COUNT) {
      return `${table.STRIKE_COUNT}스트라이크`;
    }
    if (!table.STRIKE_COUNT && table.BALL_COUNT) {
      return `${table.BALL_COUNT}볼`;
    }
    if (!table.STRIKE_COUNT && !table.BALL_COUNT) {
      return `낫싱`;
    }
  }
}

const app = new App();
app.play();
export default App;
