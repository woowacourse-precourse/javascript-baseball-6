import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "../Constant/Constant";

class UserInput {
  async inputUser() {
    const userInput = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT);
    if (!this.isValidInput(userInput)) {
      throw new Error(MESSAGE.ERROR);
    }
    return userInput.split('').map(Number);
  }

  isValidInput(userInput) {
    return new Set(userInput).size === 3 && /^[1-9]{3}$/.test(userInput);
  }

  async restartOption() {
    const option = await MissionUtils.Console.readLineAsync(MESSAGE.REPLAY);
    if (option === '1') {
      return true;
    } else if (option === '2') {
      return false;
    } else {
      throw new Error(MESSAGE.ERROR);
    }
  }
}

export default UserInput;
