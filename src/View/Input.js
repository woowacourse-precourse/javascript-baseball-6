import { Console } from '@woowacourse/mission-utils';

class Input {
  static async readAsync(query) {
    return await Console.readLineAsync(query);
  }
}

export default Input;
