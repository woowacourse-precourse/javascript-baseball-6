import { Random, Console } from "@woowacourse/mission-utils";

class App {
  pickRandomNumber(array) {
    while (array.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!array.includes(number)) {
        array.push(number);
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

  dataToArray(data, array) {
    let count = 2;

    while (array.length < 3) {
      array.push(Math.floor(data / 10 ** count));
      data = data % 10 ** count;

      count--;
    }
  }

  calculateStrike(randomArray, inputArray) {
    let count = 0;
    randomArray.map((data, index) => data === inputArray[index] && count++);

    return count;
  }

  calculateBall(randomArray, inputArray, strikeCount) {
    let judgeArray = [];

    judgeArray = randomArray.map((data) => inputArray.includes(data));
    return judgeArray.filter((data) => data).length - strikeCount;
  }

  async finish() {
    return Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
  }

  async play() {
    let randomArray = [];
    let inputArray = [];
    let inputData = "";
    let resetCode = "";

    let strikeCount = 0;
    let ballCount = 0;

    Console.print("숫자 야구 게임을 시작합니다.");

    while (resetCode !== "2") {
      inputArray = [];
      this.pickRandomNumber(randomArray);

      inputData = await this.start();
      this.validate(inputData);

      this.dataToArray(inputData, inputArray);

      strikeCount = this.calculateStrike(randomArray, inputArray);
      ballCount = this.calculateBall(randomArray, inputArray, strikeCount);

      if (strikeCount === 3) {
        Console.print("3스트라이크");
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

        resetCode = await this.finish();
        randomArray = [];
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
