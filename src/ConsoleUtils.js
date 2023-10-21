import { Console } from "@woowacourse/mission-utils";

class ConsoleUtils {
  print(message) {
    Console.print(message);
    return this;
  }

  async readLineAsync(message) {
    return await Console.readLineAsync(message);
  }
}

export default ConsoleUtils;
