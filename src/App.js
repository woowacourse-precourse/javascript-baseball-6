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

  async randomNumber() {
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
    try {
      const username = await Console.readLineAsync("숫자를 입력해주세요 : ");
    } catch (error) {
      // reject 되는 경우
      for (let i = 0; i < 3; i++) {
        if (typeof user[i] !== "number") {
          throw new Error("숫자만 입력해주세요");
        } else if (isNull(user)) {
          throw new Error("값을 입력해주세요.");
        } else if (user.length !== 3) {
          throw new Error("3자리 미만으로 입력해주세요.");
        }
      }
    }
  }
}

// 사용법:
const app = new App();
app.play();
