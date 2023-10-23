import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";

export class App {
  async play() {
    this.init();
    try {
      const userInput = await this.playerInput();
    } catch (error) {
      Console.print(error);
    }

    const computer = new Computer();
    console.log(computer.getComputerNumber());
  }

  init() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  async playerInput() {
    try {
      return await Console.readLineAsync("숫자를 입력해주세요 : ");
    } catch (error) {
      return Console.print(error);
    }
  }
}

// 컴퓨터가 랜덤한 숫자를 생성한다.
export class Computer {
  #computerNumber;

  constructor() {
    this.createRandomNumber();
  }

  createRandomNumber() {
    const randomNumber = new Set();

    while (randomNumber.size < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomNumber.has(number)) {
        randomNumber.add(number);
      }
    }
    this.#computerNumber = [...randomNumber];
  }

  getComputerNumber() {
    return this.#computerNumber;
  }
}

const app = new App();
app.play();
