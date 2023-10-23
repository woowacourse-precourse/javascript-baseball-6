// src/App.js
import { MissionUtils } from "@woowacourse/mission-utils";

export default class App {
  constructor() {
    this.computerNumbers = this.generateRandomNumbers();
  }

  generateRandomNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      const userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
      if (userInput.length !== 3) {
        throw new Error("[ERROR] 3자리 숫자를 입력해주세요.");
      }

      const { strikes, balls } = this.getScore(userInput.split("").map(Number));

      if (strikes === 3) {
        MissionUtils.Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const restart = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
        if (restart === "1") {
          this.computerNumbers = this.generateRandomNumbers();
          continue;
        } else {
          break;
        }
      } else if (strikes === 0 && balls === 0) {
        MissionUtils.Console.print("낫싱");
      } else {
        MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
      }
    }
  }

  getScore(userNumbers) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (userNumbers[i] === this.computerNumbers[i]) {
        strikes++;
      } else if (this.computerNumbers.includes(userNumbers[i])) {
        balls++;
      }
    }

    return { strikes, balls };
  }
}
