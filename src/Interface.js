import { Console } from '@woowacourse/mission-utils';

class Interface {
  static requestValuForContent(content) {
    const INPUT_VALUE = Console.readLineAsync(content);
    return INPUT_VALUE;
  }

  static printMessage(message) {
    return Console.print(message);
  }
}

export default Interface;
