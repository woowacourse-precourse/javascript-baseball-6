import { MissionUtils, Console } from "@woowacourse/mission-utils";
("@woowacourse/mission-utils");

const GAME_START_MESSAGE = "숫자 야구 게임을 시작합니다.";
const GAME_INPUT_MESSAGE = "숫자를 입력해주세요 : ";
const BALL = "볼";
const STRIKE = "스트라이크";
const NOT_THING = "낫싱";
const GAME_RESTART_MESSAGE =
  "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.";
const ERROR_PREFIX = "[ERROR]";
const GAME_WIN_MESSAGE = "축하합니다! 정답을 맞추셨습니다.";
const GAME_END_MESSAGE = "게임 종료";
class App {
  #computer;

  constructor() {
    this.resetComputer();
  }

  resetComputer() {
    this.#computer = [];
    while (this.#computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.#computer.includes(String(number))) {
        this.#computer.push(String(number));
      }
    }
    Console.print(GAME_START_MESSAGE);
  }

  async play() {
    while (true) {
      const answer = await this.getNumbers();
      const isCorrect = await this.guessNumber(answer);

      if (isCorrect) {
        Console.print(GAME_RESTART_MESSAGE);
        const restartAnswer = await Console.readLineAsync("");

        if (restartAnswer === "1") {
          this.resetComputer();
          continue;
        } else {
          break;
        }
      }
    }

    Console.print(GAME_END_MESSAGE);
  }

  async getNumbers() {
    return await Console.readLineAsync(GAME_INPUT_MESSAGE);
  }

  async guessNumber(guess) {
    try {
      if (guess.length !== this.#computer.length) {
        throw new Error();
      }

      guess = guess.toString().split("");

      let strike = 0;
      let ball = 0;

      for (let i = 0; i < 3; i++) {
        if (guess[i] === this.#computer[i]) {
          strike++;
        } else if (this.#computer.includes(guess[i])) {
          ball++;
        }
      }

      if (strike === 3) {
        Console.print(`${strike}${STRIKE}`);
        Console.print(GAME_WIN_MESSAGE);
        return true;
      }

      let resultMessage = "";

      if (ball > 0) {
        resultMessage += `${ball}${BALL} `;
      }

      if (strike > 0) {
        resultMessage += `${strike}${STRIKE}`;
      }

      if (strike === 0 && ball === 0) {
        resultMessage = NOT_THING;
      }

      Console.print(resultMessage);

      return false;
    } catch (err) {
      throw new Error(`${ERROR_PREFIX} : 숫자가 잘못된 형식입니다.`);
    }
  }
}

export default App;
