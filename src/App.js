import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor(name) {
    this.name = name;
  }

  // 컴퓨터 숫자 받아오기
  async play() {
    await this.start();
    this.run();
  }

  async start() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  run() {
    this.randomNumber();
    this.inputNumber();
  }

  randomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    // 컴퓨터 변수가 값을 잘 받았나 확인하는 용도
    console.log(computer);
  }

  async inputNumber() {
    const user = await Console.readLineAsync("숫자를 입력해주세요 : ");
    console.log(user);
  }
}

// 사용법:
const app = new App();
app.play();
