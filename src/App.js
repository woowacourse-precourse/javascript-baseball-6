import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.CONTINUE_PLAYING = true;
    this.NEW_GAME = "1";
    this.QUIT_GAME = "2";
  }

  async play() {
    while (this.CONTINUE_PLAYING) {
      console.log("숫자 야구 게임을 시작합니다");
      const { strike, ball } = this.start();
      this.CONTINUE_PLAYING = strike !== 3;
      this.printGameResultMessage(strike, ball);
      if (!this.CONTINUE_PLAYING) {
        this.CONTINUE_PLAYING = await this.shouldContinue();
      }
    }
  }
  printGameResultMessage(strike, ball) {
    let message = "";
    if (strike === 3) {
      message = "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료";
    } else {
      const messages = [];
      if (ball > 0) messages.push(`${ball}볼`);
      if (strike > 0) messages.push(`${strike}스트라이크`);
      if (messages.length === 0) messages.push("낫싱");
      message = messages.join(" ");
    }
    console.log(message);
  }

  isInputValid(input) {
    return /^[1-9]{3}$/.test(input);
  }

  start() {
    if (this.CONTINUE_PLAYING) {
      const COMPUTER_NUM = this.generateRandomNumbers(3);
      let input;
      while (true) {
        input = this.getInputNum();
        if (this.isInputValid(input)) {
          break;
        }
      }
      const { ball, strike } = this.calculateScore(COMPUTER_NUM, input);
      console.log(`${ball}볼 ${strike}스트라이크`);
      return { ball, strike };
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

  getInputNum() {
    return Console.readLineAsync("숫자를 입력해주세요 : ");
  }

  generateRandomNumbers(count) {
    const numbers = new Set();
    while (numbers.size < count) {
      numbers.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return [...numbers];
  }

  async shouldContinue() {
    const choice = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: "
    );
    return choice === this.NEW_GAME.toString();
  }
}

const app = new App();
app.play();

export default App;
