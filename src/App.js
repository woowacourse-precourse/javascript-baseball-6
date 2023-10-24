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
    const input = await MissionUtils.Console.readLineAsync(
      MESSAGES.SIGN_INPUT_NUMBER
    );

    if (isNaN(Number(input))) {
      this.gameStatus = GAMESTATUS.done;
      throw new Error(MESSAGES.ERROR_NAN);
    }

    if (input !== "1" && input !== "2" && input.length !== 3) {
      throw new Error(MESSAGES.ERROR_LENGTH);
    }

    this.checkInputOneOrTwo(input);

    return input;
  }

  checkInputOneOrTwo(input) {
    if (input === "1") {
      this.computerAnswer = this.generateAnswer();
    }
    if (input === "2") {
      this.gameStatus = GAMESTATUS.done;
    }
    return;
  }

  async calculateStrikeAndBall() {
    const checkedInput = await this.checkUserInput();

    if (checkedInput !== "1" && checkedInput !== "2") {
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
        strike,
        ball,
      };
    }
  }

  async announceResult() {
    const { strike, ball } = await this.calculateStrikeAndBall();

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

        this.checkInputOneOrTwo(input);
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

export default App;
