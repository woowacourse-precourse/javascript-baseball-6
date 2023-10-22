import { Console, Random } from "@woowacourse/mission-utils";

const GAME_ACTIONS = {
  RESTART: "restart",
  EXIT: "exit",
};

const ERROR_MESSAGES = "[ERROR] 숫자가 잘못된 형식입니다.";

class App {
  /** 게임을 시작하는 메소드 */
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      const computerNumber = this.generateRandomNumberArray();

      while (true) {
        const input = await Console.readLineAsync("숫자를 입력해주세요 : ");

        this.validateInput(input);

        const isFinished = this.compareInputWithComputerNumber(
          input,
          computerNumber
        );

        if (isFinished) break;
      }

      const action = await this.handleGameRestartOrExit();

      if (action === GAME_STATUS.EXIT) break;
    }
  }

  /** 1에서 9까지 서로 다른 임의의 수 3개를 선택하여 3자리 수를 생성하는 메소드 */
  generateRandomNumberArray() {
    const randomNumberArray = [];
    while (randomNumberArray.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomNumberArray.includes(number)) {
        randomNumberArray.push(number);
      }
    }

    return randomNumberArray;
  }

  /** 입력받은 수와 컴퓨터가 생성한 수를 비교하여 결과를 출력하는 메소드 */
  compareInputWithComputerNumber(input, computerNumber) {
    const inputNumberArray = input.toString().split("").map(Number);
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (computerNumber.includes(inputNumberArray[i])) {
        if (computerNumber[i] === inputNumberArray[i]) {
          strike++;
        } else {
          ball++;
        }
      }
    }

    if (strike === 3) {
      Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return true;
    } else if (!strike && !ball) {
      Console.print("낫싱");
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
    return false;
  }

  /** 입력 받은 수를 체크해 올바른 값이 아니면 예외 처리하는 메소드 */
  validateInput(input) {
    // 각 자리의 수가 서로 다른 세자리 숫자인지 확인
    const isValid = /^(?!.*(\d).*\1)\d{3}$/.test(input);

    if (!isValid) {
      throw new Error(ERROR_MESSAGES);
    }
  }

  /** 게임 재시작, 종료 컨트롤 메소드 */
  async handleGameRestartOrExit() {
    const finishControlInput = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    if (finishControlInput === "1") return GAME_ACTIONS.RESTART;

    if (finishControlInput === "2") return GAME_ACTIONS.EXIT;

    throw new Error(ERROR_MESSAGES);
  }
}

export default App;
