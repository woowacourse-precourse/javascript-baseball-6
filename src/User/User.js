import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "../Constant/Constant.js";
import ErrorHandler from "../Error/Error.js";

export default class User {
  constructor() {
    this.errorHandler = new ErrorHandler();
  }

  async getInput() {
    const userInput = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT);
    this.errorHandler.checkInput(userInput);
    return userInput;
  }

  async getReplay() {
    const replayInput = await MissionUtils.Console.readLineAsync(MESSAGE.RESET);
    this.errorHandler.checkReplay(replayInput);
    return replayInput;
  }
}
