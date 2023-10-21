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

    while (true) {
      const player = await this.getUserInput();
      const { strike, ball } = this.getCountArray(computer.join(""), player);
      // console.log(computer.join(''), player);
      if (strike === 3) {
        MissionUtils.Console.print(GAME_TEXT.WIN);
        const choice = await this.getChoice();
        if (Number(choice) === 2) {
          break;
        }
      }
      MissionUtils.Console.print(`${ball}${GAME_TEXT.BALL} ${strike}${GAME_TEXT.STRIKE}`);
    }
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

  getCountArray(computer, player) {
    const result = { strike: 0, ball: 0 };

    for (let index = 0; index < 3; index++) {
      if (Number(computer[index]) === Number(player[index])) {
        result.strike++;
      }
    }

    for (let index = 0; index < 3; index++) {
      const getIdx = computer.indexOf(player[index]);
      if (getIdx == -1 || getIdx === index) {
        continue;
      }
      result.ball++;
    }

    return result;
  }

  async getChoice() {
    try {
      const choice = await MissionUtils.Console.readLineAsync(GAME_TEXT.CHOICE);

      if (Number(choice) !== 1 && Number(choice) !== 2) {
        throw new Error(GAME_TEXT.ERROR(GAME_TEXT.NOT_MATCH_CHOICE));
      }

      return Number(choice);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
