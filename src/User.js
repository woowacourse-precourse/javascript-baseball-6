import { Console } from "@woowacourse/mission-utils";
import InputValidator from "./utils/InputValidator.js";

export default class User {
  async getInput() {
    let input;
    while (true) {
      try {
        input = await Console.readLineAsync("숫자를 입력해주세요. : ");
        InputValidator.validateInput(input);
        return Array.from(input).map(Number);
      } catch (error) {
        Console.print(error.message);
        throw error;
      }
    }
  }
}
