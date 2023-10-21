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
    console.log(this.computer);
    await this.myInputNum();
  }

  async myInputNum() {
    const myNum = await Console.readLineAsync("숫자를 입력해주세요 : ");
    this.inputNum = myNum.split("").map((element) => parseInt(element));

    if (myNum.includes("0")) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다");
    }
    if (this.computer.length !== new Set(this.inputNum).size) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다");
    }
    if (myNum.length !== 3) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다");
    }
  }
}

let app = new App();
app.play();

export default App;
