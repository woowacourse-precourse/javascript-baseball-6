import { Console, Random } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.randomNumber = this.makeRandomNumber();
    this.game = true;
  }

  makeRandomNumber() {
    let computer = "";
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer += number;
      }
    }
    return computer;
  }

  handleValid(userInput) {
    if (!/^\d{3}$/.test(userInput)) {
      return false;
    }
    let checkUnique = new Set(userInput);
    return checkUnique.size === 3;
  }

  checkAnswer(userInput) {
    let ball = 0;
    let strike = 0;
    let prom = "";

    for (let i = 0; i < 3; i++) {
      if (this.randomNumber[i] === userInput[i]) {
        strike++;
      } else if (this.randomNumber.includes(userInput[i])) {
        ball++;
      }
    }
    if (ball === 0 && strike === 0) {
      prom = prom += "낫싱";
    }
    if (ball > 0) {
      prom += `${ball}볼 `;
    }
    if (strike > 0) {
      prom += `${strike}스트라이크`;
    }
    return prom;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    while (this.game) {
      let userInput = await Console.readLineAsync("숫자를 입력해 주세요 : ");
      if (!this.handleValid(userInput)) {
        Console.print("유효하지 않은 입력입니다. 게임을 종료합니다.");
        this.game = false;
        throw new Error("[ERROR]");
      }
      let answer = this.checkAnswer(userInput);

      Console.print(answer);

      if (userInput === this.randomNumber) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const userInput = await Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
        );
        if (userInput === "1") {
          this.randomNumber = this.makeRandomNumber();
        } else if (userInput === "2") {
          this.game = false;
          return;
        } else {
          Console.print("유효하지 않은 입력입니다. 게임을 종료합니다.");
          this.game = false;
          throw new Error("[ERROR]");
        }
      }
    }
  }
}

const app = new App();
app.play();

export default App;
