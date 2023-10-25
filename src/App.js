import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    let reStart;

    try {
      do {
        reStart = await this.playGame();
      } while (reStart === "1");
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);

      if (reStart !== "1" && reStart != "2") {
        throw new Error("[ERROR]: 1 혹은 2 를 입력해야 합니다.");
      }
    }
  }

  verifyInputFormat(input) {
    const USER_INPUT = input;
    if (USER_INPUT === "") {
      throw new Error(
        "아무것도 입력하지 않았습니다. 서로 다른 세 자리 숫자를 입력해 주세요."
      );
    }
    if (isNaN(USER_INPUT)) {
      throw new Error(
        "문자를 입력하였습니다. 서로 다른 세 자리 숫자를 입력해 주세요."
      );
    }
    if (!USER_INPUT.trim()) {
      throw new Error(
        "공백없이 입력해야 합니다. 서로 다른 세 자리를 입력해 주세요."
      );
    }
    if (USER_INPUT.length != 3) {
      throw new Error(
        "길이가 세 자리가 아닙니다. 서로 다른 세 자리 숫자를 입력해 주세요."
      );
    }
    if (!this.areDigitsUnique(USER_INPUT)) {
      throw new Error(
        "자릿수가 달라야 합니다. 서로 다른 세 자리를 입력해 주세요."
      );
    }
  }

  areDigitsUnique(input) {
    const DIGITS = input.split("");
    return new Set(DIGITS).size === DIGITS.length;
  }

  compareResult(ball, strike) {
    const BALL_COUNT = ball;
    const STRIKE_COUNT = strike;
    if (BALL_COUNT === 0 && STRIKE_COUNT === 0) {
      return `낫싱`;
    }
    if (STRIKE_COUNT === 0) {
      return `${BALL_COUNT}볼`;
    }
    if (BALL_COUNT === 0) {
      return `${STRIKE_COUNT}스트라이크`;
    }
    if (BALL_COUNT !== 0 && STRIKE_COUNT !== 0) {
      return `${BALL_COUNT}볼 ${STRIKE_COUNT}스트라이크`;
    }
  }

  compareNumbers(computer, user) {
    const RANDOM_LIST = computer.toString().split("");
    const USER_LIST = user.toString().split("");

    let ballCount = 0;
    let strikeCount = 0;

    for (let i = 0; i < RANDOM_LIST.length; i++) {
      if (
        RANDOM_LIST[i] !== USER_LIST[i] &&
        RANDOM_LIST.includes(USER_LIST[i])
      ) {
        ballCount++;
      }
      if (RANDOM_LIST[i] === USER_LIST[i]) {
        strikeCount++;
      }
    }

    Console.print(this.compareResult(ballCount, strikeCount));
  }

  generateRandomNumber() {
    const RANDOM_NUMBER_SET = new Set();

    while (RANDOM_NUMBER_SET.size < 3) {
      const RANDOM_NUMBER = Random.pickNumberInRange(1, 9);
      RANDOM_NUMBER_SET.add(RANDOM_NUMBER.toString());
    }

    return [...RANDOM_NUMBER_SET].join("");
  }

  async playGame() {
    let randomNumber = this.generateRandomNumber();
    let userInput;

    do {
      userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
      this.verifyInputFormat(userInput);
      this.compareNumbers(randomNumber, userInput);
    } while (randomNumber !== userInput);

    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const RESTART = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    return RESTART;
  }
}

export default App;
