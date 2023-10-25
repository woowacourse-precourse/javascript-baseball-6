import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.isGameEnd = false;
    this.secretNumber = "";
  }

  async play() {
    while (!this.isGameEnd) {
      this.secretNumber = this.createRandomNumbers();
      let isRoundEnd = false;

      while (!isRoundEnd) {
        const userInput = await this.getUserInput();

        const set = new Set(userInput);
        this.validateInput(userInput, set);

        const { strikes, balls } = this.compareNumbers(userInput, this.secretNumber);
        this.printResult(strikes, balls);

        if (strikes === 3) {
          isRoundEnd = true;
          const restartOrEnd = await this.getRestartOrEndInput();
          this.processRestartOrEnd(restartOrEnd);
        }
      }
    }
  }

  async getUserInput() {
    const userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    if (!/^[1-9]{3}$/.test(userInput)) {
      throw new Error("[ERROR] 1부터 9까지의 서로 다른 3자리 숫자를 입력해주세요.");
    }
    return userInput;
  }

  validateInput(userInput, set) {
    if (set.size !== 3) {
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");
    }
  }

  compareNumbers(guess, secret) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (guess[i] === secret[i]) {
        strikes++;
      } else if (secret.includes(guess[i])) {
        balls++;
      }
    }

    return { strikes, balls };
  }

  printResult(strikes, balls) {
    if (strikes === 0 && balls === 0) {
      MissionUtils.Console.print("낫싱");
    } else {
      MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
    }
  }

  async getRestartOrEndInput() {
    let isValidInput = false;
    let input;

    while (!isValidInput) {
      input = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");

      if (input !== "1" && input !== "2") {
        MissionUtils.Console.print("[ERROR] 잘못된 입력 방식입니다.");
      } else {
        isValidInput = true;
      }
    }

    return input;
  }

  processRestartOrEnd(restartOrEnd) {
    if (restartOrEnd === "1") {
      MissionUtils.Console.print("게임을 새로 시작합니다.");
    } else if (restartOrEnd === "2") {
      this.isGameEnd = true;
      MissionUtils.Console.print("게임 종료");
    }
  }

  createRandomNumbers() {
    let numbers = [];

    while (numbers.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    console.log(`컴퓨터의 랜덤 값은 : ${numbers.join("")}`);

    return numbers.join("");
  }
}
const app = new App();
app.play();
export default App;
