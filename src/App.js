import { ANSWER, CORRECT_NUMBER, NO_MATCH_NUMBER } from '../utils/Constants.js';
import Validator from '../utils/Validator.js';
import { makeTemplate } from '../utils/makeTemplate.js';
import ComputerNumber from './ComputerNumber.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';

class App {
  #computerNumber;

  #isGaming;

  constructor() {
    OutputView.printStart();
    this.#start();
  }

  #start() {
    this.#computerNumber = ComputerNumber.generateComputerNumber();
    this.#isGaming = true;
  }

  async play() {
    while (this.#isGaming) {
      const input = await this.#getUserInput();
      const table = this.#matchComputerNumber(input);
      const template = makeTemplate(table);
      OutputView.printResult(template);
      await this.#checkCorrect(table);
    }
  }

  async #getUserInput() {
    const answer = await InputView.readUserInput();
    const input = Validator.validateUserInput(answer);
    return [...input].map((e) => Number(e));
  }

  #matchComputerNumber(userInput) {
    const table = {
      STRIKE_COUNT: 0,
      BALL_COUNT: 0,
    };
    userInput.forEach(this.#countMatchNumber(table));
    return table;
  }

  #countMatchNumber(table) {
    return (userNum, userNumIndex) => {
      const matchedIndex = this.#computerNumber.findIndex(
        (computerNum) => computerNum === userNum,
      );
      if (matchedIndex !== NO_MATCH_NUMBER) {
        if (userNumIndex === matchedIndex) table.STRIKE_COUNT += 1;
        if (userNumIndex !== matchedIndex) table.BALL_COUNT += 1;
      }
    };
  }

  async #checkCorrect(table) {
    if (table.STRIKE_COUNT === CORRECT_NUMBER) {
      OutputView.printCorrect();
      const retryAnswer = await InputView.readRetryAnswer();
      if (retryAnswer === ANSWER.RESTART) this.#start();
      if (retryAnswer === ANSWER.FINISH) this.#finish();
    }
  }

  #finish() {
    OutputView.printFinish();
    this.#isGaming = false;
  }
}

const app = new App();
app.play();
export default App;
