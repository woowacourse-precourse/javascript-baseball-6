import { Console } from "@woowacourse/mission-utils";

export default class BaseballInput {
  constructor() {
    this.getUserInput();
  }

  async getUserInput() {
    try {
      const userInput = await Console.readLineAsync("숫자를 입력해 주세요 : ");
      console.log(userInput);
    } catch (err) {
      throw Error(err);
    }
  }
}
