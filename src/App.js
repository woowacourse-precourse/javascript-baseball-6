import { ANSWER } from '../utils/Constants.js';
import Validator from '../utils/Validator.js';
import { makeTemplate } from '../utils/makeTemplate.js';
import ComputerNumber from './ComputerNumber.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';

class App {
  #computerNumber;
  constructor() {
    OutputView.printStart();
    this.#makeComputerNumber();
  }

  #makeComputerNumber() {
    this.#computerNumber = ComputerNumber.generateComputerNumber();
  }

  async play() {
    while (true) {
      const input = await this.#getUserInput();
      const table = this.#matchComputerNumber(input);
      const template = makeTemplate(table);
      OutputView.printResult(template);

      if (table.STRIKE_COUNT === 3) {
        OutputView.printCorrect();
        const retryAnswer = await InputView.readRetryAnswer();
        if (retryAnswer === ANSWER.RESTART) {
          this.#makeComputerNumber();
        }
        if (retryAnswer === ANSWER.FINISH) {
          this.#finish();
          break;
        }
      }
    }
  }

  async #getUserInput() {
    const answer = await InputView.readUserInput();
    const input = Validator.validateUserInput(answer);
    return [...input].map((e) => Number(e));
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
}

const app = new App();
app.play();
export default App;
