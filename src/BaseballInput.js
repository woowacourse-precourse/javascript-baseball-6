import { MAGIC_NUM } from "./constants/magicNum.js";
import { INFO_MESSAGE } from "./constants/message.js";
import { validateUserInput } from "./utils/inputValidator.js";

import { Console } from "@woowacourse/mission-utils";

export default class BaseballInput {
  state = null;

  constructor({ initialState, changeUserState, restartGame }) {
    this.state = initialState;
    this.changeUserState = changeUserState;
    this.restartGame = restartGame;
    this.getUserInput();
  }

  async getInput() {}

  async getUserInput() {
    try {
      const userInput = await Console.readLineAsync("숫자를 입력해 주세요 : ");
      validateUserInput(userInput);
      this.changeUserState(userInput);
    } catch (err) {
      Console.print(err.message);
      throw new Error(err.message);
    }
    return;
  }

  async getRestartInput() {
    try {
      await Console.print(
        INFO_MESSAGE.WIN_MESSAGE +
          INFO_MESSAGE.END_MESSAGE +
          "\n" +
          `게임을 새로 시작하려면 ${MAGIC_NUM.NEW_GAME_NUM}, 종료하려면 ${MAGIC_NUM.END_GAME_NUM}를 입력하세요.`
      );
      // await Console.print(INFO_MESSAGE.WIN_MESSAGE + INFO_MESSAGE.END_MESSAGE);
      const restartInput = await Console.readLineAsync("");
      await this.restartGame(restartInput);
    } catch (err) {
      Console.print(err.message);
      throw new Error(err.message);
    }
  }
}
