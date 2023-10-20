import { Console } from '@woowacourse/mission-utils';

class Input {
  static async readAsync(string, cb) {
    try {
      const input = await Console.readLineAsync(string);
      cb(input);
    } catch (err) {
      throw new Error(`[ERROR] ${err.message}`);
    }
  }
}

export default Input;
