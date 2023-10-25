import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.NEW_GAME = "1";
    this.QUIT_GAME = "2";
  }

  async play() {
    let shouldQuit = true;
    const COMPUTER_NUM = this.generateRandomNumbers(3);

    while (!shouldQuit) {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      const { ball, strike } = this.start();

      if (strike === 3) {
        MissionUtils.Console.print(
          "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
        );
        shouldQuit = !(await this.shouldContinue());
      } else {
        this.printGameResultMessage(ball, strike);
      }
    }
  }

  printGameResultMessage(ball, strike) {
    let message;

    if (ball === 0) {
      if (strike === 0) {
        message = "낫싱";
      } else {
        message = `${strike}스트라이크`;
      }
    } else {
      if (strike === 0) {
        message = `${ball}볼`;
      } else {
        message = `${ball}볼 ${strike}스트라이크`;
      }
    }

    MissionUtils.Console.print(message);
  }

  isInputValid(input) {
    return /^[1-9]{3}$/.test(input);
  }

  getInputNum() {
    return MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
  }

  async start() {
    const COMPUTER_NUM = this.generateRandomNumbers(3);
    while (true) {
      const input = await this.getInputNum("숫자를 입력해주세요 : ");
      if (this.isInputValid(input)) {
        const { ball, strike } = this.calculateScore(COMPUTER_NUM, input);
        MissionUtils.Console.print(`${ball}${App.BALL} ${strike}${App.STRIKE}`);
        if (strike === 3) {
          return { ball, strike };
        }
      } else {
        MissionUtils.Console.print(App.ERROR);
        throw new Error(App.ERROR);
      }
    }
  }

  calculateScore(computerNum, inputNum) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < computerNum.length; i++) {
      if (computerNum[i] === inputNum[i]) {
        strike++;
      } else if (computerNum.includes(inputNum[i])) {
        ball++;
      }
    }

    return { ball, strike };
  }

  generateRandomNumbers(count) {
    const numbers = new Set();
    while (numbers.size < count) {
      numbers.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return [...numbers];
  }

  async shouldContinue() {
    const choice = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: "
    );
    if (choice === this.NEW_GAME) {
      return true;
    } else if (choice === this.QUIT_GAME) {
      return false;
    }
    return true;
  }
}

const app = new App();
app.play();

export default App;
