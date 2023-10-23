import { Console, Random } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.computer = [];
    this.inputNum = [];
    this.gameOverBtn = [];
    this.strike = 0;
    this.ball = 0;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computer = [];

    await this.createRandomNum();
  }

  async createRandomNum() {
    while (this.computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
    console.log(this.computer);
    await this.myInputNum();
  }

  async myInputNum() {
    const myNum = await this.getUserInput();
    this.checkNumberValidity(myNum);
    await this.compareResult();
  }

  async getUserInput() {
    const myNum = await Console.readLineAsync("숫자를 입력해주세요 : ");
    this.inputNum = myNum.split("").map((element) => parseInt(element));

    return this.inputNum;
  }

  checkNumberValidity(myNum) {
    if (!this.isValidFormat(myNum) || !this.isDuplicateNumbers(myNum)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  isValidFormat(myNum) {
    return /^[1-9]{3}$/.test(myNum.join(""));
  }

  isDuplicateNumbers(myNum) {
    return this.computer.length === new Set(myNum).size;
  }

  async compareResult() {
    this.strike = 0;
    this.ball = 0;
    for (let i = 0; i < 3; i++) {
      if (this.computer[i] === this.inputNum[i]) {
        this.strike += 1;
      } else if (
        this.computer[i] !== this.inputNum[i] &&
        this.computer.includes(this.inputNum[i])
      ) {
        this.ball += 1;
      } else {
        Console.print("낫싱");
      }
    }
    await this.result();
  }

  async result() {
    if (this.ball === 0 && this.strike !== 0) {
      Console.print(`${this.strike}스트라이크`);
    } else if (this.ball !== 0 && this.strike === 0) {
      Console.print(`${this.ball}볼`);
    } else {
      Console.print(`${this.ball}볼 ${this.strike}스트라이크`);
    }
    await this.isThreeStrike();
  }

  async isThreeStrike() {
    if (this.strike === 3) {
      await this.gameOver();
    } else {
      await this.myInputNum();
    }
  }

  async gameOver() {
    const restartOrEnd = await Console.readLineAsync(
      `3개의 숫자를 모두 맞히셨습니다! 게임 종료
게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`
    );
    this.gameOverBtn = restartOrEnd
      .split("")
      .map((element) => parseInt(element));
    if (this.gameOverBtn[0] === 1 && this.gameOverBtn.length === 1) {
      this.play();
    } else if (this.gameOverBtn[0] === 2 && this.gameOverBtn.length === 1) {
      Console.print("게임 종료");
    }
  }
}

const app = new App();
app.play();
export default App;
