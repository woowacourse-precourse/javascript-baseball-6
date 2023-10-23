import Validator from '../utils/Validator.js';
import { Console } from '@woowacourse/mission-utils';
import OutputView from '../view/OutputView.js';
import ComputerNumber from '../domain/ComputerNumber.js';
import UserNumber from '../domain/UserNumber.js';
import BaseballGameResult from '../domain/BaseballGameResult.js';
import InputView from '../view/InputView.js';

class BaseballGameController {
  #computerNumber;
  #userNumber;
  #gameResult;

  start() {
    OutputView.printStart();
    return Console.readLineAsync('숫자를 입력해주세요 : ').then(
      (userNumbers) => {
        Validator.validateNumber(userNumbers);
        this.makeComputerNumberStage();
        this.checkResultStage(userNumbers);
      }
    );
  }

  makeComputerNumberStage() {
    this.#computerNumber = new ComputerNumber().getComputerNumbers();
  }

  checkResultStage(userNumbers) {
    this.#userNumber = new UserNumber(userNumbers).getUserNumbers();
    this.#gameResult = new BaseballGameResult(
      this.#computerNumber,
      this.#userNumber
    ).getResult();

    OutputView.printResult(this.#gameResult);

    const strike = this.#gameResult.strike;
    if (strike === 3) {
      OutputView.printEndMessage();
      this.readEndCommandStage();
    } else {
      this.readUserNumberStage();
    }
  }

  readUserNumberStage() {
    InputView.readUserNumbers(this.checkResultStage.bind(this));
  }

  readEndCommandStage() {
    InputView.readEndCommand(this.replayStage.bind(this));
  }

  replayStage(userCommand) {
    if (userCommand === '1') {
      this.start();
      return;
    }
    return;
  }
}

export default BaseballGameController;
