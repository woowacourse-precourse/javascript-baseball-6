import { MissionUtils } from "@woowacourse/mission-utils";

const START_MESSAGE = "숫자 야구 게임을 시작합니다.";
const INPUT_MESSAGE = "숫자를 입력해주세요 : ";
const ERROR_MESSAGE = "[ERROR]";
const CLEAR_MESSAGE = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const RESTART_MESSAGE = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";

class BaseBallGame {
  async play() {
    try {
      MissionUtils.Console.print(START_MESSAGE);
      await this.#controller();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }

  async #controller() {
    const computerNums = this.#generateComputerNumbers();
    let strikeCount = 0;

    while (strikeCount < 3) {
      try {
        const userInput = await this.#readUserInput();
        this.#checkValidation(userInput);
        const result = this.#calculateResult(computerNums, userInput);
        strikeCount = result.strikeCount;

        if (strikeCount === 3) {
          MissionUtils.Console.print(CLEAR_MESSAGE);
          await this.#restartController();
          return;
        }
      } catch (error) {
        MissionUtils.Console.print(ERROR_MESSAGE);
        throw error;  // 예외를 다시 던집니다.
      }
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
    return computer
  }

  async #readUserInput() {
    return MissionUtils.Console.readLineAsync(INPUT_MESSAGE);
  }

  #checkValidation(userInput) {
    if (userInput.length !== 3) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  #calculateResult(computerNums, userInput) {
    let ballCount = 0;
    let strikeCount = 0;

    const userInputArr = userInput.split("").map(Number);
    userInputArr.forEach((num, index) => {
      if (num === computerNums[index]) strikeCount++;
      else if (computerNums.includes(num)) ballCount++;
    })

    let result = "";
    if (ballCount) result += ballCount + "볼 ";
    if (strikeCount) result += strikeCount + "스트라이크";
    if (ballCount === 0 && strikeCount === 0) result += "낫싱";
    MissionUtils.Console.print(result.trim())
    return { ballCount, strikeCount };
  }

  async #restartController() {
    const isRestart = await MissionUtils.Console.readLineAsync(RESTART_MESSAGE);

    if (isRestart === '1') {
      await this.#controller();
    } else {
      MissionUtils.Console.print("게임 종료");
    }
  }
}

export default BaseBallGame;