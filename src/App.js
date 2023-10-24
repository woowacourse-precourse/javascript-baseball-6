import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.NEW_GAME = "1";
    this.QUIT_GAME = "2";
  }

  async play() {
    let continuePlaying = true;

    while (continuePlaying) {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다");
      const { ball, strike } = this.start();

      if (strike === 3) {
        MissionUtils.Console.print(
          "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
        );
        continuePlaying = await this.shouldContinue();
      } else {
        this.printGameResultMessage(ball, strike);
      }
    }
  }

  printGameResultMessage(ball, strike) {
    let message =
      ball === 0
        ? strike === 0
          ? "낫싱"
          : `${strike}스트라이크`
        : strike === 0
        ? `${ball}볼`
        : `${ball}볼 ${strike}스트라이크`;
    MissionUtils.Console.print(message);
  }

  isInputValid(input) {
    return /^[1-9]{3}$/.test(input);
  }

  async start() {
    const COMPUTER_NUM = this.generateRandomNumbers(3);
    let input;

    while (true) {
      input = await this.getInputNum();

      if (this.isInputValid(input)) {
        const { ball, strike } = this.calculateScore(COMPUTER_NUM, input);
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
        return { ball, strike };
      } else {
        MissionUtils.Console.print("[Error]");
        throw new Error("[Error]");
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

  async getInputNum() {
    return MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
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
    return false;
  }
}

const app = new App();
app.play();

export default App;
