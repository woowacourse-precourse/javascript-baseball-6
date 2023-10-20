import { Console, Random } from "@woowacourse/mission-utils";
import readline from "readline";
class App {
  constructor() {
    this.computer = [];
    this.inputNum = [];
  }
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.createRandomNum();
  }

  async createRandomNum() {
    while (this.computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
    Console.print(this.computer);
    await this.myInputNum();
  }

  async myInputNum() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    //예외 (0포함X)
    rl.question("숫자를 입력해주세요 : ", (myNum) => {
      if (myNum.includes("0")) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다");
      }
      //예외(숫자만 허용)
      this.inputNum = myNum.split("").map((element) => parseInt(element));
      //예외(중복X, 3자리)
      if (this.computer.length !== new Set(this.inputNum).size) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다");
      }

      rl.close();
    });
  }
}

let app = new App();
app.play();

export default App;
