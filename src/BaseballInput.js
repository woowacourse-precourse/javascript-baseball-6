import { MAGIC_NUM } from "./constants/magicNum.js";
import { validationRestartInput } from "./utils/inputValidator.js";

import { Console } from "@woowacourse/mission-utils";

export default class BaseballInput {
  state = null;

  constructor({ initialState, changeUserState }) {
    this.state = initialState;
    this.changeUserState = changeUserState;
    this.getRestartInput();
    // this.getUserInput();
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
    try {
      Console.print(
        `3개의 숫자를 모두 맞히셨습니다! 게임 종료 ${"\n"}게임을 새로 시작하려면 ${
          MAGIC_NUM.NEW_GAME_NUM
        }, 종료하려면 ${MAGIC_NUM.END_GAME_NUM}를 입력하세요.`
      );
      const restartInput = await Console.readLineAsync("");
      validationRestartInput(restartInput);
    } catch (err) {
      throw Error("입력 오류: " + err);
    }
  }
}
