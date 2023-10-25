import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.randomNum = [];
    this.userNum = [];
    this.ball = 0;
    this.strike = 0;
  }
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.randomNumber();
    await this.startGame();
  }

  async startGame() {
    await this.userNumber();
    this.validation();
    this.checkBall();
    this.result();
  }

  randomNumber() {
    const randomNum = [];
    while (randomNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNum.includes(number)) randomNum.push(number);
    }
    this.randomNum = randomNum;
  }
  async userNumber() {
    const userNum = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    this.userNum = userNum.split("").map(Number);
  }

  validation() {
    const validationNum = [];
    if (this.userNum.length !== 3) {
      throw new Error("[ERROR] 세 자리 수를 입력해 주세요.");
    }
    this.userNum.forEach((num) => {
      if (isNaN(num) || num === 0) {
        throw new Error("[ERROR] 1~9 사이의 숫자를 입력해 주세요.");
      }
      if (validationNum.includes(num)) {
        throw new Error("[ERROR] 서로 다른 세 자리 수를 입력해 주세요.");
      }
      validationNum.push(num);
    });
  }
  checkBall() {
    let ball = 0;
    let strike = 0;
    this.randomNum.forEach((randomNum, randomNumIndex) => {
      this.userInput.forEach((userNum, userIndex) => {
        if (randomNum === userNum && randomNumIndex === userIndex) {
          strike++;
        } else if (randomNum === userNum && randomNumIndex !== userIndex) {
          ball++;
        }
      });
    });
    this.ball = ball;
    this.strike = strike;
  }

  result() {
    if (this.strike === 0 && this.ball === 0) {
      MissionUtils.Console.print("낫싱");
    } else if (this.strike !== 0 && this.ball === 0) {
      MissionUtils.Console.print(`${this.strike}스트라이크`);
    } else if (this.strike === 0 && this.ball !== 0) {
      MissionUtils.Console.print(`${this.ball}볼`);
    } else {
      MissionUtils.Console.print(`${this.ball}볼 ${this.strike}스트라이크`);
    }
  }
}

export default App;
