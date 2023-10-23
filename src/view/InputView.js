import { Console } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';

const InputView = {
  readUserNumbers(callback) {
    Console.readLineAsync('숫자를 입력해주세요 : ').then((userNumbers) => {
      Validator.validateNumber(userNumbers);
      callback(userNumbers);
    });
  },
};

export default InputView;
