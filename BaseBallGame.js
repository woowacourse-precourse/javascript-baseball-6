import { MissionUtils } from "@woowacourse/mission-utils";

const START_MESSAGE = "숫자 야구 게임을 시작합니다."
const INPUT_MESSAGE = "숫자를 입력해주세요 : "

class BaseBallGame {
  async play() {
    MissionUtils.Console.print(START_MESSAGE);
    this.#generateComputerNumbers();
    const userInput = await this.#readUserInput();
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
}

export default BaseBallGame