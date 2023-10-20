import { Console } from "@woowacourse/mission-utils";

export default class BaseballInput {
  state = null;

  constructor({ initialState, changeUserState }) {
    this.state = initialState;
    this.changeUserState = changeUserState;
    this.getUserInput();
  }

  async getUserInput() {
    try {
      const userInput = await Console.readLineAsync("숫자를 입력해 주세요 : ");
      this.changeUserState(userInput);
    } catch (err) {
      throw Error("입력 오류: " + err);
    }
  }

  async getRestartInput() {
    console.log(`check`);
  }
}
