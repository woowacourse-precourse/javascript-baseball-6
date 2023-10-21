import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_TEXT } from "./constants/string.js";

class App {
  async play() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    MissionUtils.Console.print(GAME_TEXT.START);

    const player = await this.getUserInput();
    console.log(player);
  }

  async getUserInput() {
    try {
      const number = await MissionUtils.Console.readLineAsync(GAME_TEXT.INPUT);

      if (number.length !== 3) {
        throw new Error(GAME_TEXT.ERROR(GAME_TEXT.NOT_MATCH_LENGTH));
      }
      if (!Number.isInteger(Number(number))) {
        throw new Error(GAME_TEXT.ERROR(GAME_TEXT.INVALID_NUMBER));
      }
      if (Number(number) < 0) {
        throw new Error(GAME_TEXT.ERROR(GAME_TEXT.IS_NEGATIVE_NUMBER));
      }
      if (this.checkDuplicateNumber(number)) {
        throw new Error(GAME_TEXT.ERROR(GAME_TEXT.DUPLICATE_NUMBER));
      }

      return number;
    } catch (error) {
      throw new Error(error);
    }
  }

  checkDuplicateNumber(number) {
    const isDuplicate = Array(10).fill(false);

    for (let index = 0; index < 3; index++) {
      if (isDuplicate[Number(number[index])]) {
        return true;
      }
      isDuplicate[Number(number[index])] = true;
    }
    return false;
  }
}

export default App;
