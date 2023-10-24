import { Console, Random } from "@woowacourse/mission-utils";
import Computer from "./modules/Computer";
import User from "./utils/User";

export default class App {
  constructor() {
    this.isReplaying = true;
    this.computer = new Computer();
    this.user = new User(); 
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    while (this.isReplaying) {
      await this.compareNumbers();
    }
  }

  async getComputerNumber() {
    return this.computer.getComputerNumber();
  }

  async compareNumbers() {
    let correctPositionCount = 0;
    const machineGeneratedNumber = await this.getComputerNumber();

    while (correctPositionCount !== 3) {
      const playerInput = await this.user.getNumber()
      correctPositionCount = 0;
      let correctDigitCount = 0;

      for (let i = 0; i < 3; i++) {
        if (playerInput[i] === machineGeneratedNumber[i]) {
          correctPositionCount++;
        } else if (machineGeneratedNumber.includes(playerInput[i])) {
          correctDigitCount++;
        }
      }

      this.printHint(correctDigitCount, correctPositionCount);

      if (correctPositionCount === 3) {
        await this.isReplay();
      }
    }
  }

  printHint(ball, strike) {
    if (ball === 0 && strike === 0) {
      Console.print("낫싱");
    } else if (ball === 0 && strike !== 0) {
      Console.print(`${strike}스트라이크`);
    } else if (ball !== 0 && strike === 0) {
      Console.print(`${ball}볼`);
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  async isReplay() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.print(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    const userChoice = await Console.readLineAsync("");

    if (userChoice === "1") {
      this.isReplaying = true;
    } else if (userChoice === "2") {
      this.isReplaying = false;
    } else {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
}

