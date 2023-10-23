import { Console } from "@woowacourse/mission-utils";

class GameConsole {
  static print(message) {
    Console.print(message);
  }
  
  static async readLineAsync(text) {
    return Console.readLineAsync(text);
  }
}

export default GameConsole;
