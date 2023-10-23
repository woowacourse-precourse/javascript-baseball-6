import Validator from '../utils/Validator.js';
import { Console } from '@woowacourse/mission-utils';
import OutputView from '../view/OutputView.js';
import ComputerNumber from '../domain/ComputerNumber.js';

class BaseballGameController {
  #computerNumber;

  start() {
    OutputView.printStart();
    return Console.readLineAsync('숫자를 입력해주세요 : ').then(
      (userNumbers) => {
        Validator.validateNumber(userNumbers);
        this.makeComputerNumberStage();
      }
    );
  }

  makeComputerNumberStage() {
    this.#computerNumber = new ComputerNumber().getComputerNumbers();
    console.log(this.#computerNumber);
  }
}

export default BaseballGameController;
