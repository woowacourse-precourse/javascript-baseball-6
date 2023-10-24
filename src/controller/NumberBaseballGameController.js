import OutputView from '../view/OutputView.js';
import Computer from '../model/Computer.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';
import InputView from '../view/InputView.js';
import { NUMBER_SIZE } from '../constants/index.js';

class NumberBaseballGameController {
  #computer;

  constructor() {
    this.#computer = new Computer(generateRandomNumber());
  }

  gameStart = async () => {
    OutputView.printStartString();

    return this.inputUserNumber();
  };

  inputUserNumber = async () => {
    const userNumber = await InputView.readUserNumber();
    const userNumberArray = userNumber.split('').map(str => Number(str));
    const strikeCount = this.#computer.getStrikeCount(userNumberArray);
    const ballCount = this.#computer.getBallCount(userNumberArray, strikeCount);

    return this.handleInputOrEnd(ballCount, strikeCount);
  };

  inputRestartNumber = async () => {
    const restartNumber = await InputView.readRestartNumber();

    if (restartNumber === '1') {
      this.gameReset();
      return this.inputUserNumber();
    }
    if (restartNumber === '2') return Promise.resolve();

    return Promise.resolve();
  };

  handleInputOrEnd = (ballCount, strikeCount) => {
    OutputView.printResultString(ballCount, strikeCount);

    if (strikeCount === NUMBER_SIZE) {
      OutputView.printEndString();
      return this.inputRestartNumber();
    }

    return this.inputUserNumber();
  };

  gameReset = () => {
    this.#computer.reset();
  };
}

export default NumberBaseballGameController;
