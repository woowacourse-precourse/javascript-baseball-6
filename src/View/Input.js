import { Console } from '@woowacourse/mission-utils';
import Output from './Output';

class Input {
  static async readAsync(string, cb) {
    try {
      const input = await Console.readLineAsync(string);
      cb(input);
    } catch (err) {
      Output.print(`[ERROR] ${err.message}`);
    }
  }
}

export default Input;
