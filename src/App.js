import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.randomNumber = [];
  }

  computerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      this.randomNumber = this.computerNumber();
      Console.print(this.randomNumber);
      let continueGame = true;

      while (continueGame) {
        const userNumber = await this.inputNumber();
        try {
          const result = await this.checkNumber(userNumber);
          Console.print(result);

          if (result === "3스트라이크") {
            continueGame = await this.restartGame();
          }
        } catch (error) {
          throw error;
        }
      }

      if (!continueGame) {
        break;
      }
    }
  }

  async inputNumber() {
    const userNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
    return userNumber;
  }

  checkNumber(userNumber) {
    const randomNumberArray = this.randomNumber;
    const userNumberArray = (userNumber || "").split("").map(Number);

    if (
      userNumberArray.some((num) => isNaN(num) || num < 1 || num > 9) ||
      userNumberArray.length !== 3 ||
      new Set(userNumberArray).size !== userNumberArray.length
    ) {
      throw new Error("[ERROR] 잘못된 형식의 숫자입니다.");
    } else {
      let ball = 0;
      let strike = 0;

      for (let i = 0; i < userNumberArray.length; i++) {
        if (randomNumberArray[i] === userNumberArray[i]) {
          strike += 1;
        } else if (randomNumberArray.includes(userNumberArray[i])) {
          ball += 1;
        }
      }

      if (strike === 3) {
        Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        return "3스트라이크";
      } else if (ball === 0 && strike === 0) {
        return "낫싱";
      } else if (ball === 0 && strike > 0) {
        return `${strike}스트라이크`;
      } else if (ball > 0 && strike === 0) {
        return `${ball}볼`;
      } else {
        return `${ball}볼 ${strike}스트라이크`;
      }
    }
  }

  async restartGame() {
    const number = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );

    if (number === "1") {
      this.randomNumber = this.computerNumber();
      return true;
    } else if (number === "2") {
      return false;
    } else {
      throw new Error("[ERROR] 잘못된 입력입니다.");
    }
  }
}

const app = new App();
app.play();

export default App;
