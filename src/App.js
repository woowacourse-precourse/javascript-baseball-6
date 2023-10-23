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
    let restart = true;
    while (restart) {
      restart = false;
      this.strikes = [];
      this.isWin = false;
      await this.playGame().then(() => {});
      const answerRestart = await getUserInput(QUERY.restart, REGEX.restart);
      if (answerRestart == "1") {
        restart = true;
      } else if (answerRestart == "2") {
        break;
      }
    }
  }

  async playGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.strikes = [];
    this.strikes = generateStrikes();
    Console.print(this.strikes); // 테스트 시 활성화
    while (!this.isWin) {
      await this.playInning().then(message => {
        Console.print(message);
        if (message == "3스트라이크") {
          this.isWin = true;
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          return new Promise(resolve => {
            resolve();
          });
        }
      });
    }
  }

  async playInning() {
    const guess = await getUserInput(QUERY.guess, REGEX.guess);
    const [strikeCount, ballCount] = this.evaluateGuess(guess, this.strikes);
    let message = "";
    if (ballCount == 0 && strikeCount == 0) {
      message = "낫싱";
    } else if (strikeCount == 0) {
      message += `${ballCount}볼`;
    } else if (ballCount == 0) {
      message += `${strikeCount}스트라이크`;
    } else {
      message += `${ballCount}볼 ${strikeCount}스트라이크`;
    }
    return message;
  }

  evaluateGuess(guessNumbers, strikeNumbers) {
    const numbers = [...guessNumbers].map(str => Number(str));
    Console.print(numbers);
    let strikeCount = 0;
    let ballCount = 0;
    numbers.forEach((number, index) => {
      if (number == strikeNumbers[index]) {
        strikeCount += 1;
      } else {
        if (strikeNumbers.includes(number)) {
          ballCount += 1;
        }
      }
    });
    return [strikeCount, ballCount];
  }
}

const app = new App();
app.play();

export default App;
