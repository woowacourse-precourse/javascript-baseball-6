import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  gameEnd = false;
  random = "";
  ball = 0;
  strike = 0;
  constructor() {
    this.random = this.init();
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
    return this.generateRandom()
  }
  generateRandom() {
    const str = MissionUtils.Random.pickNumberInRange(100, 999).toString();
    const strArray = str.split("");
    const isPossible =
      strArray.filter((value, index) => strArray.indexOf(value) === index)
        .length === 3;
    if (isPossible) return str;
    return this.generateRandom();
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
    throw "error";
  }

  estimateScore(userInput) {
    const result = userInput
      .split("")
      .map((value, index) => this.calculateScore(value, index));
  }

  calculateScore(value, index) {
    this.random.indexOf(value) === index
      ? this.strike++
      : this.random.indexOf(value) === -1
      ? null
      : this.ball++;
  }
  printScore() {
    if (this.strike === 0 && this.ball == 0) MissionUtils.Console.print("낫띵");
    if (this.strike) MissionUtils.Console.print(`${this.strike}스트라이크`);
    if (this.ball) MissionUtils.Console.print(`${this.ball}볼`);
    if (this.strike === 3) {
      this.ball = 0;
      this.strike = 0;
      return true;
    }
    this.ball = 0;
    this.strike = 0;
    return false;
  }
  async gameRestart() {
    await MissionUtils.Console.print(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );

    const restartInput = await this.getNumber(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    if (restartInput === "2") {
      this.gameEnd = true;
      return;
    }
    this.random = this.init();
  }
}

export default App;

