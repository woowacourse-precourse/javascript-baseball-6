import { Console } from "@woowacourse/mission-utils";
import { generateStrikes } from "./modules/random.js";
import { getUserInput } from "./modules/input.js";
import { QUERY, REGEX } from "./modules/constants.js";

class App {
  constructor() {
    this.strikes = [];
    this.isWin = false;
  }

  async play() {
    do {
      await this.playGame();
    } while (await this.getRestart());
  }

  async getRestart() {
    const answerRestart = await getUserInput(QUERY.restart, REGEX.restart);
    if (answerRestart[0] == 1) {
      return true;
    } else if (answerRestart[0] == 2) {
      return false;
    } else {
      throw new Error("[ERROR]");
    }
  }

  async playGame() {
    this.startGame();
    while (!this.isWin) {
      const [message, strikeCount] = await this.playInning();
      Console.print(message);
      if (strikeCount == 3) {
        this.isWin = true;
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        return Promise.resolve();
      }
    }
  }

  startGame() {
    this.strikes = generateStrikes();
    // Console.print(this.strikes); // 코드 작성 시 활성화하여 작업
    this.isWin = false;
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  async playInning() {
    const guess = await getUserInput(QUERY.guess, REGEX.guess);
    const [strikeCount, ballCount] = this.getScore(guess, this.strikes);
    const message = this.getMessage(strikeCount, ballCount);
    return [message, strikeCount];
  }

  getMessage(strikeCount, ballCount) {
    let message = "";
    if (ballCount > 0) {
      message += `${ballCount}볼 `;
    }
    if (strikeCount > 0) {
      message += `${strikeCount}스트라이크`;
    }
    if (ballCount == 0 && strikeCount == 0) {
      message = "낫싱";
    }
    return message;
  }

  getScore(guessNumbers, strikeNumbers) {
    let strikeCount = 0;
    let ballCount = 0;
    guessNumbers.forEach((number, index) => {
      if (number == strikeNumbers[index]) {
        strikeCount += 1;
      } else if (strikeNumbers.includes(number)) {
        ballCount += 1;
      }
    });
    return [strikeCount, ballCount];
  }
}

export default App;
