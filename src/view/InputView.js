import { Console } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';

const InputView = {
  readUserNumbers(callback) {
    Console.readLineAsync('숫자를 입력해주세요 : ').then((userNumbers) => {
      Validator.validateNumber(userNumbers);
      callback(userNumbers);
    });
  },
  readEndCommand(callback) {
    Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요\n'
    ).then((userCommand) => {
      Validator.validateCommand(userCommand);
      callback(userCommand);
    });
  },
};

export default InputView;
