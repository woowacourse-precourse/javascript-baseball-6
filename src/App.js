import { Console, Random } from "@woowacourse/mission-utils";

const GAME_STATUS = {
  END: "end",
  CONTINUE: "continue",
};

const GAME_ACTIONS = {
  RESTART: "restart",
  EXIT: "exit",
};

const MESSAGES = {
  GAME_START: "숫자 야구 게임을 시작합니다.",
  INPUT_NUMBER: "숫자를 입력해주세요 : ",
  INPUT_ACTION: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  INPUT_ERROR: "[ERROR] 숫자가 잘못된 형식입니다.",
  COMPARE_RESULT: {
    ALL_MATCH: "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    NO_MATCH: "낫싱",
    BALL_STRIKE: (ball, strike) => `${ball}볼 ${strike}스트라이크`,
  },
};

class App {
  /** 게임을 시작하는 메소드 */
  async play() {
    Console.print(MESSAGES.GAME_START);

    while (true) {
      const computerNumber = this.generateRandomNumberArray();

      while (true) {
        const input = await Console.readLineAsync(MESSAGES.INPUT_NUMBER);

        this.validateInput(input);

        const status = this.compareInputWithComputerNumber(
          input,
          computerNumber
        );

        if (status === GAME_STATUS.END) break;
      }

      const action = await this.handleGameRestartOrExit();

      if (action === GAME_ACTIONS.EXIT) break;
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
      Console.print(MESSAGES.COMPARE_RESULT.ALL_MATCH);
      return GAME_STATUS.END;
    }

    if (!strike && !ball) {
      Console.print(MESSAGES.COMPARE_RESULT.NO_MATCH);
      return GAME_STATUS.CONTINUE;
    }

    Console.print(MESSAGES.COMPARE_RESULT.BALL_STRIKE(ball, strike));
    return GAME_STATUS.CONTINUE;
  }

  /** 입력 받은 수를 체크해 올바른 값이 아니면 예외 처리하는 메소드 */
  validateInput(input) {
    // 각 자리의 수가 서로 다른 세자리 숫자인지 확인
    const isValid = /^(?!.*(\d).*\1)\d{3}$/.test(input);

    if (!isValid) {
      throw new Error(MESSAGES.INPUT_ERROR);
    }
  }

  /** 게임 재시작, 종료 컨트롤 메소드 */
  async handleGameRestartOrExit() {
    const finishControlInput = await Console.readLineAsync(
      MESSAGES.INPUT_ACTION
    );

    if (finishControlInput === "1") return GAME_ACTIONS.RESTART;

    if (finishControlInput === "2") return GAME_ACTIONS.EXIT;

    throw new Error(MESSAGES.INPUT_ERROR);
  }
}

export default App;
