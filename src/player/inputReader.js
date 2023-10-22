// InputReader.js
import { MissionUtils } from '@woowacourse/mission-utils';

class InputReader {
  static readInput(message) {
    return MissionUtils.Console.readLineAsync(message);
  }
}

export default InputReader;
