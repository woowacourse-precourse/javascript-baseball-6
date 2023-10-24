import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  gameEnd = false;
  random = [];
  ball = 0;
  strike = 0;
  constructor() {
    this.init();
    this.ball = 0;
    this.strike = 0;
  }
  async play() {
    while (!this.gameEnd) {
      const input = await this.getInput();
      this.estimateScore(input);
      const isAnswer = this.printScore();
      if (isAnswer) await this.gameRestart();
    }
  }
  init() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.generateRandom();
  }
  generateRandom() {
    this.random = []
    while (this.random.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.random.includes(number)) {
        this.random.push(number);
      }
    }
  }
  async getInput() {
    const userInput = await this.getNumber("숫자를 입력해주세요 : ");
    this.numberCheck(userInput);
    return userInput;
  }

  async getNumber(msg) {
    return await MissionUtils.Console.readLineAsync(msg);
  }

  numberCheck(userInput) {
    const NUMBER_CHECK = /[0-9]$/g;
    if (NUMBER_CHECK.test(userInput) && userInput > 99 && userInput < 1000)
      return true;
    throw Error("[ERROR]");
  }

  estimateScore(userInput) {
    const result = userInput
      .split("")
      .map((value, index) => this.calculateScore(Number(value), index));
  }

  calculateScore(value, index) {
    this.random.indexOf(value) === index
      ? this.strike++
      : this.random.indexOf(value) === -1
      ? null
      : this.ball++;
  }
  printScore() {
    if (this.strike === 0 && this.ball == 0) MissionUtils.Console.print("낫싱");
    if (this.strike === 3) {
      MissionUtils.Console.print(`${this.strike}스트라이크`);
      this.ball = 0;
      this.strike = 0;
      return true;
    }
    if (this.strike && this.ball)
      MissionUtils.Console.print(`${this.ball}볼 ${this.strike}스트라이크`);
    else if (this.strike)
      MissionUtils.Console.print(`${this.strike}스트라이크`);
    else if (this.ball) MissionUtils.Console.print(`${this.ball}볼`);
    this.ball = 0;
    this.strike = 0;
    return false;
  }
  async gameRestart() {
    await MissionUtils.Console.print(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );

    const restartInput = await this.getNumber(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (restartInput === "2") {
      this.gameEnd = true;
      return;
    }
    this.init();
  }
}

export default App;