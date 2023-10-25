import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computerNumber = [];
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    await this.start();
  }

  async start() {
    await this.randomNumber();
    await this.getNumber();
  }

  async randomNumber() {
    while (this.computerNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(number)) {
        this.computerNumber.push(number);
      }
    }
    return this.computerNumber;
  }

  validateNumberFormat(checkNumber, checkNumberArray) {
    const checkNumberSet = new Set(checkNumberArray);

    if (
      isNaN(+checkNumber) ||
      checkNumber.length !== 3 ||
      checkNumberSet.size !== checkNumberArray.length
    ) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  async getNumber() {
    try {
      const threeNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
      const threeNumberArray = threeNumber.split("");

      this.validateNumberFormat(threeNumber, threeNumberArray);

      const ballCount = { strike: 0, ball: 0 };

      threeNumberArray.map((item, index) => {
        if (
          this.computerNumber.includes(+item) &&
          this.computerNumber[index] === +threeNumberArray[index]
        )
          ballCount.strike++;
        else if (
          this.computerNumber.includes(+item) ||
          this.computerNumber[index] === +threeNumberArray[index]
        )
          ballCount.ball++;
      });

      if (ballCount.strike === 3) {
        Console.print(`3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        await this.restart();
        return;
      } else if (ballCount.strike && ballCount.ball)
        Console.print(`${ballCount.ball}볼 ${ballCount.strike}스트라이크`);
      else if (ballCount.strike) Console.print(`${ballCount.strike}스트라이크`);
      else if (ballCount.ball) Console.print(`${ballCount.ball}볼`);
      else Console.print("낫싱");

      await this.getNumber();
    } catch (error) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  async restart() {
    const startCheck = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );

    if (startCheck === "1") {
      const app = new App();
      await app.start();
    } else if (startCheck !== "2") {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
}

export default App;

const app = new App();
app.play();
