import { Console } from '@woowacourse/mission-utils';

const InputView = {
  input(message, callback) {
    Console.readLineAsync(message, callback);
  },
};

export default InputView;
