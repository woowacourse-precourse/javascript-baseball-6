import { MissionUtils } from "@woowacourse/mission-utils";

export default class App {
  constructor() {
    this.computerNumbers = [];
    this.shouldRun = true;
    this.attempts = 0;
  }

  generateRandomNumbers() {
    this.computerNumbers = [];
    while (this.computerNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumbers.includes(number)) {
        this.computerNumbers.push(number);
      }
    }
  }

  getGameResult(computerNumbers, userNumbers) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < computerNumbers.length; i++) {
      if (userNumbers[i] === computerNumbers[i]) {
        strikes++;
      } else if (computerNumbers.includes(userNumbers[i])) {
        balls++;
      }
    }

    if (strikes === 0 && balls === 0) {
      return "낫싱";
    } else if (strikes === 3) {
      return `3스트라이크`;
    } else {
      let result = "";
      if (balls > 0) {
        result += `${balls}볼 `;
      }
      if (strikes > 0) {
        result += `${strikes}스트라이크`;
      }
      return result.trim();
    }
  }


  async startNewGame() {
    this.shouldRun = true;
    this.attempts = 0;
    this.generateRandomNumbers(); // generateRandomNumbers 함수를 먼저 호출합니다.
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    while (this.shouldRun) {
      try {
        this.attempts++;
        const userInput = await MissionUtils.Console.readLineAsync(
          "서로 다른 3자리의 숫자를 입력하거나 게임을 재시작하려면 1, 종료하려면 2을 입력하세요: "
        );
        const userNumbers = userInput.trim().split("").map((num) => parseInt(num));

        if (userInput === "1") {
          MissionUtils.Console.print("게임을 재시작합니다.");
          this.attempts = 0;
          this.generateRandomNumbers(); // 재시작 시에도 generateRandomNumbers 함수를 호출합니다.
          continue;
        }

        if (userInput === "2") {
          MissionUtils.Console.print("게임 종료");
          this.shouldRun = false;
        } else if (userNumbers.length !== 3 || new Set(userNumbers).size !== 3 || userNumbers.some(isNaN)) {
          throw new Error("[ERROR] 잘못된 값을 입력하였습니다. 서로 다른 3자리의 숫자를 입력하세요.");
        } else {
          const result = this.getGameResult(this.computerNumbers, userNumbers); // computerNumbers 배열을 전달합니다.
          MissionUtils.Console.print(result);

          // if (result.includes("축하합니다")) {
          //   this.shouldRun = false;
          // }
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }
  }


  async play() {
    await this.startNewGame();
  }
}

const baseballGame = new App();
baseballGame.play();
