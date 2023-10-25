import { Random, Console } from "@woowacourse/mission-utils";

class App {
  inputArray = [];
  randomArray = [];

  pickRandomNumber() {
    while (this.randomArray.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.randomArray.includes(number)) {
        this.randomArray.push(number);
      }
    }
  }

  async start() {
    return Console.readLineAsync("숫자를 입력해주세요 : ");
  }

  validate(data) {
    if (data.length > 3 || data.length < 3 || isNaN(data)) {
      throw new Error("[ERROR] 잘못된 값을 입력하였습니다.");
    }
  }

  dataToArray(data) {
    let count = 2;

    while (this.inputArray.length < 3) {
      this.inputArray.push(Math.floor(data / 10 ** count));
      data = data % 10 ** count;

      count--;
    }
  }

  calculateStrike() {
    let count = 0;
    this.randomArray.map(
      (data, index) => data === this.inputArray[index] && count++
    );

    return count;
  }

  calculateBall(strikeCount) {
    let judgeArray = [];

    judgeArray = this.randomArray.map((data) => this.inputArray.includes(data));
    return judgeArray.filter((data) => data).length - strikeCount;
  }

  async finish() {
    return Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
  }

  async play() {
    let inputData = "";
    let resetCode = "";

    let strikeCount = 0;
    let ballCount = 0;

    Console.print("숫자 야구 게임을 시작합니다.");

    while (resetCode !== "2") {
      this.inputArray = [];
      this.pickRandomNumber();

      inputData = await this.start();
      this.validate(inputData);

      this.dataToArray(inputData);

      strikeCount = this.calculateStrike();
      ballCount = this.calculateBall(strikeCount);

      if (strikeCount === 3) {
        Console.print("3스트라이크");
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

        resetCode = await this.finish();
        this.randomArray = [];
      } else if (strikeCount > 0 && ballCount > 0) {
        Console.print(ballCount + "볼 " + strikeCount + "스트라이크");
      } else if (strikeCount > 0) {
        Console.print(strikeCount + "스트라이크");
      } else if (ballCount > 0) {
        Console.print(ballCount + "볼");
      } else {
        Console.print("낫싱");
      }
    }
  }
}

export default App;
