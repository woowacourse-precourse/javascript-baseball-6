import { ANSWER } from '../utils/Constants';
import Validator from '../utils/Validator';
import { makeTemplate } from '../utils/makeTemplate';
import ComputerNumber from './ComputerNumber';
import InputView from './InputView';
import OutputView from './OutputView';

class App {
  #computerNumber;

  constructor() {
    OutputView.printStart();
    this.#initGame();
  }

  #initGame() {
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
          this.#initGame();
        }
        if (retryAnswer === ANSWER.FINISH) {
          OutputView.printFinish();
          return Promise.resolve('게임 종료');
        }
      }
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
    userInput.forEach((userNum, userNumIndex) => {
      const matchedIndex = this.#computerNumber.findIndex(
        (computerNum) => computerNum === userNum,
      );
      if (matchedIndex !== -1) {
        if (userNumIndex === matchedIndex) table.STRIKE_COUNT += 1;
        if (userNumIndex !== matchedIndex) table.BALL_COUNT += 1;
      }
    });
    return table;
  }
}

const app = new App();
app.play();
export default App;
