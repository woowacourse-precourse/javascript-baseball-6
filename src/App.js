import { MissionUtils } from "@woowacourse/mission-utils";
import { GAMESTATUS } from "./constant/gameStatus.js";
import { MESSAGES } from "./constant/message.js";

class App {
  computerAnswer;
  gameStatus;

  constructor() {
    this.computerAnswer = this.generateAnswer();
    this.gameStatus = GAMESTATUS.playing;
  }

  async play() {
    this.printConsole(MESSAGES.GAME_START);
    while (this.gameStatus === GAMESTATUS.playing) {
      await this.announceResult();
    }
    this.printConsole(MESSAGES.GAME_END);
  }

  async checkUserInput() {
    // 1. 예외가 발생하면, Error를 반환하고 다시 input을 입력받는다.
    // 1-0. 에러가 있으면, gameStatus를 먼저 GAMESTATUS.done 으로 바꾼다.
    // 1-1. 입력한 값이 숫자가 아니면 Error를 반환한다.
    // 1-2. 입력한 값의 길이가 3이 되지 않으면 Error를 반환한다. 단, 1, 2를 입력한 경우를 제외한다.
    const input = await MissionUtils.Console.readLineAsync(
      MESSAGES.SIGN_INPUT_NUMBER
    );

    if (isNaN(Number(input))) {
      this.gameStatus = GAMESTATUS.done;
      throw new Error(MESSAGES.ERROR_NAN);
    }

    if (input !== "1" && input !== "2" && input.length !== 3) {
      this.gameStatus = GAMESTATUS.done;
      throw new Error(MESSAGES.ERROR_LENGTH);
    }

    if (input === "1") {
      // 유저가 1을 입력하면 게임을 다시 시작한다.
      this.compareAnswer = this.generateAnswer();
      return;
    }

    if (input === "2") {
      // 유저가 2를 입력하면 게임을 종료한다.
      this.gameStatus = GAMESTATUS.done;
      return;
    }

    return input;
  }

  async calculateStrikeAndBall() {
    // checkUserInput으로 검증된 결과 값을 받는다.
    // 1, 2를 입력했을 경우 undefined를 반환하기 때문에 예외처리를 해준다.
    const checkedInput = await this.checkUserInput();

    if (!checkedInput) {
      return {
        ok: false,
      };
    }

    let strike = 0,
      ball = 0;

    checkedInput.split("").forEach((numberString, index) => {
      if (this.computerAnswer.indexOf(numberString) === index) {
        // 정답과 입력받은 값의 자리가 같으면 strike
        strike += 1;
      } else if (this.computerAnswer.split("").includes(numberString)) {
        // 자리가 일치하지 않을 때, 포함이 된다면 ball
        ball += 1;
      }
    });

    return {
      ok: true,
      strike,
      ball,
    };
  }

  async announceResult() {
    const { ok, strike, ball } = await this.calculateStrikeAndBall();

    // 예외 처리
    if (!ok) {
      return;
    }

    if (strike === 0 && ball === 0) {
      this.printConsole("낫싱");
    } else if (strike === 0 && ball !== 0) {
      this.printConsole(`${ball}볼`);
    } else if (strike !== 0 && ball === 0) {
      this.printConsole(`${strike}스트라이크`);
      if (strike === 3) {
        this.printConsole(MESSAGES.SIGN_CORRECT_ANSWER);
        const input = await MissionUtils.Console.readLineAsync(
          MESSAGES.SIGN_PLAYMORE_OR_END
        );

        if (input === "1") {
          this.computerAnswer = this.generateAnswer();
          return;
        } else if (input === "2") {
          this.gameStatus = GAMESTATUS.done;
          return;
        }
      }
    } else {
      this.printConsole(`${ball}볼 ${strike}스트라이크`);
    }
  }

  generateAnswer() {
    const numbers = [];

    while (numbers.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }

    return numbers.join("");
  }

  printConsole(message) {
    return MissionUtils.Console.print(message);
  }
}

// -- App Class Test --
// new App().play();

export default App;
