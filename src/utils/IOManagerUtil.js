import { Console } from "@woowacourse/mission-utils";

class IOManagerUtil {
  static async getUserInput(message, validateFunction) {
    let userResponse = await Console.readLineAsync(message);
    validateFunction(userResponse.trim());
    return userResponse;
  }

  static printMessage(message) {
    Console.print(message.trim());
  }
}

export default IOManagerUtil;
