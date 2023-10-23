import { MissionUtils } from "@woowacourse/mission-utils";

const START_MESSAGE = "숫자 야구 게임을 시작합니다.";
const INPUT_MESSAGE = "숫자를 입력해주세요 : ";
const ERROR_MESSAGE = "[ERROR] 입력 값이 잘못되었습니다.";

class BaseBallGame {
  async play() {
    try {
      MissionUtils.Console.print(START_MESSAGE);
      this.#generateComputerNumbers();
      const userInput = await this.#readUserInput();
      this.#checkValidation(userInput);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }

  #generateComputerNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
  }

  async #readUserInput() {
    return await MissionUtils.Console.readLineAsync(INPUT_MESSAGE);
  }

  #checkValidation(userInput) {
    if (userInput.length !== 3) {
      throw new Error(ERROR_MESSAGE);
    }
  }
}

export default BaseBallGame