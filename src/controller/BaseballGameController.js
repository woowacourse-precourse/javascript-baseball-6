import Validator from '../utils/Validator.js';
import { Console } from '@woowacourse/mission-utils';
import OutputView from '../view/OutputView.js';

class BaseballGameController {
  start() {
    OutputView.printStart();
    return Console.readLineAsync('숫자를 입력해주세요 : ').then(
      (userNumbers) => {
        Validator.validateNumber(userNumbers);
        console.log(userNumbers);
      }
    );
  }
}

export default BaseballGameController;
