import { Console } from "@woowacourse/mission-utils";

export default class BaseballInput {
  state = null;

  constructor({ initialState, changeUserInput }) {
    this.state = initialState;
    this.changeUserInput = changeUserInput;
    this.getUserInput();
  }

  async getUserInput() {
    try {
      const userInput = await Console.readLineAsync("숫자를 입력해 주세요 : ");
      this.changeUserInput(Number(userInput));
    } catch (err) {
      throw Error(err);
    }
  }
}
