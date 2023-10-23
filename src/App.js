import { Console, Random } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.computer = [];
    this.inputNum = [];
    this.gameOverBtn = [];
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
    await this.myInputNum();
  }

  async myInputNum() {
    const myNum = await this.getUserInput();
    this.validateInput(myNum);
    await this.compareResult();
  }

  async getUserInput() {
    const myNum = await Console.readLineAsync("숫자를 입력해주세요 : ");
    this.inputNum = myNum.split("").map((element) => parseInt(element));
    return this.inputNum;
  }

  validateInput(myNum) {
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
    let strike = 0;
    let ball = 0;
    let nothing = 0;
    for (let i = 0; i < 3; i++) {
      if (
        this.computer[i] === this.inputNum[i] &&
        this.computer.includes(this.inputNum[i])
      ) {
        strike += 1;
      } else if (
        this.computer[i] !== this.inputNum[i] &&
        this.computer.includes(this.inputNum[i])
      ) {
        ball += 1;
      } else if (!this.computer.includes(this.inputNum[i])) {
        nothing += 1;
      }
    }
    if (nothing === 3) {
      Console.print("낫싱");
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }

    if (strike === 3) {
      await this.gameOver();
    } else if (strike !== 3) {
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
    if (this.gameOverBtn[0] === 1) {
      this.play();
    } else if (this.gameOverBtn[0] === 2) {
      Console.print("게임 종료");
    }
  }
}

export default App;
